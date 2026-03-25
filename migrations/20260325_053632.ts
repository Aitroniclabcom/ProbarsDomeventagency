import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

/**
 * Posts collection — safe to re-run when prior migrations were applied via dev push / hand migrations.
 * Uses whichever locale enum exists: `_locales` (Drizzle) or `enum__locales` (hand localization migration).
 */
export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  DO $$ BEGIN
    CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  EXCEPTION WHEN duplicate_object THEN NULL; END $$;
  DO $$ BEGIN
    CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  EXCEPTION WHEN duplicate_object THEN NULL; END $$;
  DO $$ BEGIN
    CREATE TYPE "public"."enum__posts_v_published_locale" AS ENUM('lv', 'ru', 'en');
  EXCEPTION WHEN duplicate_object THEN NULL; END $$;

  CREATE TABLE IF NOT EXISTS "posts" (
    "id" serial PRIMARY KEY NOT NULL,
    "slug" varchar,
    "status" "enum_posts_status" DEFAULT 'draft',
    "published_at" timestamp(3) with time zone,
    "cover_image_id" integer,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "_status" "enum_posts_status" DEFAULT 'draft'
  );

  DO $$ BEGIN
    IF EXISTS (SELECT 1 FROM pg_type WHERE typname = '_locales') THEN
      CREATE TABLE IF NOT EXISTS "posts_locales" (
        "title" varchar,
        "excerpt" varchar,
        "content" jsonb,
        "seo_title" varchar,
        "seo_description" varchar,
        "id" serial PRIMARY KEY NOT NULL,
        "_locale" "_locales" NOT NULL,
        "_parent_id" integer NOT NULL
      );
    ELSIF EXISTS (SELECT 1 FROM pg_type WHERE typname = 'enum__locales') THEN
      CREATE TABLE IF NOT EXISTS "posts_locales" (
        "title" varchar,
        "excerpt" varchar,
        "content" jsonb,
        "seo_title" varchar,
        "seo_description" varchar,
        "id" serial PRIMARY KEY NOT NULL,
        "_locale" "enum__locales" NOT NULL,
        "_parent_id" integer NOT NULL
      );
    ELSE
      RAISE EXCEPTION 'No locale enum (_locales or enum__locales) found';
    END IF;
  END $$;

  CREATE TABLE IF NOT EXISTS "_posts_v" (
    "id" serial PRIMARY KEY NOT NULL,
    "parent_id" integer,
    "version_slug" varchar,
    "version_status" "enum__posts_v_version_status" DEFAULT 'draft',
    "version_published_at" timestamp(3) with time zone,
    "version_cover_image_id" integer,
    "version_updated_at" timestamp(3) with time zone,
    "version_created_at" timestamp(3) with time zone,
    "version__status" "enum__posts_v_version_status" DEFAULT 'draft',
    "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
    "snapshot" boolean,
    "published_locale" "enum__posts_v_published_locale",
    "latest" boolean
  );

  DO $$ BEGIN
    IF EXISTS (SELECT 1 FROM pg_type WHERE typname = '_locales') THEN
      CREATE TABLE IF NOT EXISTS "_posts_v_locales" (
        "version_title" varchar,
        "version_excerpt" varchar,
        "version_content" jsonb,
        "version_seo_title" varchar,
        "version_seo_description" varchar,
        "id" serial PRIMARY KEY NOT NULL,
        "_locale" "_locales" NOT NULL,
        "_parent_id" integer NOT NULL
      );
    ELSIF EXISTS (SELECT 1 FROM pg_type WHERE typname = 'enum__locales') THEN
      CREATE TABLE IF NOT EXISTS "_posts_v_locales" (
        "version_title" varchar,
        "version_excerpt" varchar,
        "version_content" jsonb,
        "version_seo_title" varchar,
        "version_seo_description" varchar,
        "id" serial PRIMARY KEY NOT NULL,
        "_locale" "enum__locales" NOT NULL,
        "_parent_id" integer NOT NULL
      );
    END IF;
  END $$;
  `)

  await db.execute(sql`
  DO $$ BEGIN
    ALTER TABLE "posts" ADD CONSTRAINT "posts_cover_image_id_media_id_fk" FOREIGN KEY ("cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN NULL; END $$;
  DO $$ BEGIN
    ALTER TABLE "posts_locales" ADD CONSTRAINT "posts_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN NULL; END $$;
  DO $$ BEGIN
    ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN NULL; END $$;
  DO $$ BEGIN
    ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_cover_image_id_media_id_fk" FOREIGN KEY ("version_cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN NULL; END $$;
  DO $$ BEGIN
    ALTER TABLE "_posts_v_locales" ADD CONSTRAINT "_posts_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN NULL; END $$;
  `)

  await db.execute(sql`
  CREATE UNIQUE INDEX IF NOT EXISTS "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "posts_cover_image_idx" ON "posts" USING btree ("cover_image_id");
  CREATE INDEX IF NOT EXISTS "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "posts__status_idx" ON "posts" USING btree ("_status");
  CREATE UNIQUE INDEX IF NOT EXISTS "posts_locales_locale_parent_id_unique" ON "posts_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_parent_idx" ON "_posts_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_slug_idx" ON "_posts_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_cover_image_idx" ON "_posts_v" USING btree ("version_cover_image_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_updated_at_idx" ON "_posts_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_snapshot_idx" ON "_posts_v" USING btree ("snapshot");
  CREATE INDEX IF NOT EXISTS "_posts_v_published_locale_idx" ON "_posts_v" USING btree ("published_locale");
  CREATE INDEX IF NOT EXISTS "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE UNIQUE INDEX IF NOT EXISTS "_posts_v_locales_locale_parent_id_unique" ON "_posts_v_locales" USING btree ("_locale","_parent_id");
  `)

  await db.execute(sql`
  DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "posts_id" integer;
  EXCEPTION WHEN duplicate_column THEN NULL; END $$;
  DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION WHEN duplicate_object THEN NULL; END $$;
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "posts" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "posts_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_posts_v_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE IF EXISTS "posts" CASCADE;
  DROP TABLE IF EXISTS "posts_locales" CASCADE;
  DROP TABLE IF EXISTS "_posts_v" CASCADE;
  DROP TABLE IF EXISTS "_posts_v_locales" CASCADE;
  DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_posts_fk";
  EXCEPTION WHEN undefined_object THEN NULL; END $$;
  DROP INDEX IF EXISTS "payload_locked_documents_rels_posts_id_idx";
  DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "posts_id";
  EXCEPTION WHEN undefined_column THEN NULL; END $$;
  DROP TYPE IF EXISTS "public"."enum_posts_status";
  DROP TYPE IF EXISTS "public"."enum__posts_v_version_status";
  DROP TYPE IF EXISTS "public"."enum__posts_v_published_locale";`)
}
