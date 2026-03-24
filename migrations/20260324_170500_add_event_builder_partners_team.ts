import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  DO $$ BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'site_settings' AND column_name = 'site_name') THEN
      ALTER TABLE "site_settings" RENAME COLUMN "site_name" TO "general_site_name";
    END IF;
  END $$;
  DO $$ BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'site_settings' AND column_name = 'contact_email') THEN
      ALTER TABLE "site_settings" RENAME COLUMN "contact_email" TO "general_contact_email";
    END IF;
  END $$;
  DO $$ BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'site_settings' AND column_name = 'phone') THEN
      ALTER TABLE "site_settings" RENAME COLUMN "phone" TO "general_phone";
    END IF;
  END $$;
  DO $$ BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'site_settings' AND column_name = 'address') THEN
      ALTER TABLE "site_settings" RENAME COLUMN "address" TO "general_address";
    END IF;
  END $$;

  ALTER TABLE "site_settings" ADD COLUMN IF NOT EXISTS "general_logo_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN IF NOT EXISTS "footer_tagline" varchar;
  ALTER TABLE "site_settings" ADD COLUMN IF NOT EXISTS "footer_copyright_text" varchar;

  DO $$ BEGIN
    ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_general_logo_id_media_id_fk" FOREIGN KEY ("general_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;

  CREATE INDEX IF NOT EXISTS "site_settings_general_general_logo_idx" ON "site_settings" USING btree ("general_logo_id");

  CREATE TABLE IF NOT EXISTS "site_settings_header_nav_links" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "label" varchar NOT NULL,
    "href" varchar NOT NULL
  );

  DO $$ BEGIN
    ALTER TABLE "site_settings_header_nav_links" ADD CONSTRAINT "site_settings_header_nav_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;

  CREATE INDEX IF NOT EXISTS "site_settings_header_nav_links_order_idx" ON "site_settings_header_nav_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "site_settings_header_nav_links_parent_id_idx" ON "site_settings_header_nav_links" USING btree ("_parent_id");

  CREATE TABLE IF NOT EXISTS "site_settings_footer_footer_links" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "label" varchar NOT NULL,
    "href" varchar NOT NULL
  );

  DO $$ BEGIN
    ALTER TABLE "site_settings_footer_footer_links" ADD CONSTRAINT "site_settings_footer_footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;

  CREATE INDEX IF NOT EXISTS "site_settings_footer_footer_links_order_idx" ON "site_settings_footer_footer_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "site_settings_footer_footer_links_parent_id_idx" ON "site_settings_footer_footer_links" USING btree ("_parent_id");

  CREATE TABLE IF NOT EXISTS "site_settings_footer_social_links" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "platform" varchar NOT NULL,
    "url" varchar NOT NULL,
    "icon" varchar
  );

  DO $$ BEGIN
    ALTER TABLE "site_settings_footer_social_links" ADD CONSTRAINT "site_settings_footer_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;

  CREATE INDEX IF NOT EXISTS "site_settings_footer_social_links_order_idx" ON "site_settings_footer_social_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "site_settings_footer_social_links_parent_id_idx" ON "site_settings_footer_social_links" USING btree ("_parent_id");

  DO $$ BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'site_settings_social_links') THEN
      INSERT INTO "site_settings_footer_social_links" ("_order", "_parent_id", "id", "platform", "url", "icon")
      SELECT "_order", "_parent_id", "id", COALESCE("platform", ''), COALESCE("url", ''), NULL
      FROM "site_settings_social_links";
      DROP TABLE "site_settings_social_links";
    END IF;
  END $$;

  CREATE TABLE IF NOT EXISTS "pages_rels" (
    "id" serial PRIMARY KEY NOT NULL,
    "order" integer,
    "parent_id" integer NOT NULL,
    "path" varchar NOT NULL,
    "media_id" integer
  );

  DO $$ BEGIN
    ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
    ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;

  CREATE INDEX IF NOT EXISTS "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "pages_rels_media_id_idx" ON "pages_rels" USING btree ("media_id");

  CREATE TABLE IF NOT EXISTS "pages_blocks_hero" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" text NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "heading" varchar NOT NULL,
    "subheading" varchar,
    "button_text" varchar,
    "button_link" varchar,
    "block_name" varchar
  );

  DO $$ BEGIN
    ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;

  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_order_idx" ON "pages_blocks_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_path_idx" ON "pages_blocks_hero" USING btree ("_path");

  CREATE TABLE IF NOT EXISTS "pages_blocks_rich_text" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" text NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "content" jsonb,
    "block_name" varchar
  );

  DO $$ BEGIN
    ALTER TABLE "pages_blocks_rich_text" ADD CONSTRAINT "pages_blocks_rich_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;

  CREATE INDEX IF NOT EXISTS "pages_blocks_rich_text_order_idx" ON "pages_blocks_rich_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_rich_text_parent_id_idx" ON "pages_blocks_rich_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_rich_text_path_idx" ON "pages_blocks_rich_text" USING btree ("_path");

  CREATE TABLE IF NOT EXISTS "pages_blocks_team" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" text NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "heading" varchar,
    "block_name" varchar
  );

  DO $$ BEGIN
    ALTER TABLE "pages_blocks_team" ADD CONSTRAINT "pages_blocks_team_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;

  CREATE INDEX IF NOT EXISTS "pages_blocks_team_order_idx" ON "pages_blocks_team" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_team_parent_id_idx" ON "pages_blocks_team" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_team_path_idx" ON "pages_blocks_team" USING btree ("_path");

  CREATE TABLE IF NOT EXISTS "pages_blocks_team_members" (
    "_order" integer NOT NULL,
    "_parent_id" varchar NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "name" varchar NOT NULL,
    "role" varchar,
    "bio" varchar,
    "full_bio" varchar,
    "image_id" integer
  );

  DO $$ BEGIN
    ALTER TABLE "pages_blocks_team_members" ADD CONSTRAINT "pages_blocks_team_members_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_team"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
    ALTER TABLE "pages_blocks_team_members" ADD CONSTRAINT "pages_blocks_team_members_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;

  CREATE INDEX IF NOT EXISTS "pages_blocks_team_members_order_idx" ON "pages_blocks_team_members" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_team_members_parent_id_idx" ON "pages_blocks_team_members" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_team_members_image_idx" ON "pages_blocks_team_members" USING btree ("image_id");

  CREATE TABLE IF NOT EXISTS "pages_blocks_gallery" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" text NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "heading" varchar,
    "block_name" varchar
  );

  DO $$ BEGIN
    ALTER TABLE "pages_blocks_gallery" ADD CONSTRAINT "pages_blocks_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;

  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_order_idx" ON "pages_blocks_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_parent_id_idx" ON "pages_blocks_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_path_idx" ON "pages_blocks_gallery" USING btree ("_path");

  CREATE TABLE IF NOT EXISTS "pages_blocks_cta" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" text NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "heading" varchar,
    "text" varchar,
    "button_text" varchar,
    "button_link" varchar,
    "block_name" varchar
  );

  DO $$ BEGIN
    ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;

  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_order_idx" ON "pages_blocks_cta" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_path_idx" ON "pages_blocks_cta" USING btree ("_path");

  CREATE TABLE IF NOT EXISTS "pages_blocks_partners" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" text NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "heading" varchar,
    "block_name" varchar
  );

  DO $$ BEGIN
    ALTER TABLE "pages_blocks_partners" ADD CONSTRAINT "pages_blocks_partners_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;

  CREATE INDEX IF NOT EXISTS "pages_blocks_partners_order_idx" ON "pages_blocks_partners" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_partners_parent_id_idx" ON "pages_blocks_partners" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_partners_path_idx" ON "pages_blocks_partners" USING btree ("_path");

  CREATE TABLE IF NOT EXISTS "pages_blocks_partners_partners" (
    "_order" integer NOT NULL,
    "_parent_id" varchar NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "name" varchar NOT NULL,
    "logo_id" integer,
    "url" varchar
  );

  DO $$ BEGIN
    ALTER TABLE "pages_blocks_partners_partners" ADD CONSTRAINT "pages_blocks_partners_partners_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_partners"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
    ALTER TABLE "pages_blocks_partners_partners" ADD CONSTRAINT "pages_blocks_partners_partners_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;

  CREATE INDEX IF NOT EXISTS "pages_blocks_partners_partners_order_idx" ON "pages_blocks_partners_partners" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_partners_partners_parent_id_idx" ON "pages_blocks_partners_partners" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_partners_partners_logo_idx" ON "pages_blocks_partners_partners" USING btree ("logo_id");

  CREATE TABLE IF NOT EXISTS "pages_blocks_event_builder" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "_path" text NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "heading" varchar,
    "subheading" varchar,
    "submit_button_text" varchar,
    "empty_state_text" varchar,
    "block_name" varchar
  );

  DO $$ BEGIN
    ALTER TABLE "pages_blocks_event_builder" ADD CONSTRAINT "pages_blocks_event_builder_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;

  CREATE INDEX IF NOT EXISTS "pages_blocks_event_builder_order_idx" ON "pages_blocks_event_builder" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_event_builder_parent_id_idx" ON "pages_blocks_event_builder" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_event_builder_path_idx" ON "pages_blocks_event_builder" USING btree ("_path");

  CREATE TABLE IF NOT EXISTS "pages_blocks_event_builder_services" (
    "_order" integer NOT NULL,
    "_parent_id" varchar NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "key" varchar NOT NULL,
    "title" varchar NOT NULL,
    "description" varchar,
    "price" numeric,
    "image_id" integer
  );

  DO $$ BEGIN
    ALTER TABLE "pages_blocks_event_builder_services" ADD CONSTRAINT "pages_blocks_event_builder_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_event_builder"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
    ALTER TABLE "pages_blocks_event_builder_services" ADD CONSTRAINT "pages_blocks_event_builder_services_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;

  CREATE INDEX IF NOT EXISTS "pages_blocks_event_builder_services_order_idx" ON "pages_blocks_event_builder_services" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_event_builder_services_parent_id_idx" ON "pages_blocks_event_builder_services" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_event_builder_services_image_idx" ON "pages_blocks_event_builder_services" USING btree ("image_id");
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  DROP TABLE IF EXISTS "pages_blocks_event_builder_services" CASCADE;
  DROP TABLE IF EXISTS "pages_blocks_event_builder" CASCADE;
  DROP TABLE IF EXISTS "pages_blocks_partners_partners" CASCADE;
  DROP TABLE IF EXISTS "pages_blocks_partners" CASCADE;
  DROP TABLE IF EXISTS "pages_blocks_cta" CASCADE;
  DROP TABLE IF EXISTS "pages_blocks_gallery" CASCADE;
  DROP TABLE IF EXISTS "pages_blocks_team_members" CASCADE;
  DROP TABLE IF EXISTS "pages_blocks_team" CASCADE;
  DROP TABLE IF EXISTS "pages_blocks_rich_text" CASCADE;
  DROP TABLE IF EXISTS "pages_blocks_hero" CASCADE;
  DROP TABLE IF EXISTS "pages_rels" CASCADE;

  CREATE TABLE IF NOT EXISTS "site_settings_social_links" (
    "_order" integer NOT NULL,
    "_parent_id" integer NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "platform" varchar,
    "url" varchar
  );

  DO $$ BEGIN
    ALTER TABLE "site_settings_social_links" ADD CONSTRAINT "site_settings_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;

  CREATE INDEX IF NOT EXISTS "site_settings_social_links_order_idx" ON "site_settings_social_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "site_settings_social_links_parent_id_idx" ON "site_settings_social_links" USING btree ("_parent_id");

  INSERT INTO "site_settings_social_links" ("_order", "_parent_id", "id", "platform", "url")
  SELECT "_order", "_parent_id", "id", "platform", "url" FROM "site_settings_footer_social_links";

  DROP TABLE IF EXISTS "site_settings_footer_social_links" CASCADE;
  DROP TABLE IF EXISTS "site_settings_footer_footer_links" CASCADE;
  DROP TABLE IF EXISTS "site_settings_header_nav_links" CASCADE;

  ALTER TABLE "site_settings" DROP CONSTRAINT IF EXISTS "site_settings_general_logo_id_media_id_fk";
  DROP INDEX IF EXISTS "site_settings_general_general_logo_idx";
  ALTER TABLE "site_settings" DROP COLUMN IF EXISTS "general_logo_id";
  ALTER TABLE "site_settings" DROP COLUMN IF EXISTS "footer_tagline";
  ALTER TABLE "site_settings" DROP COLUMN IF EXISTS "footer_copyright_text";

  ALTER TABLE "site_settings" RENAME COLUMN "general_site_name" TO "site_name";
  ALTER TABLE "site_settings" RENAME COLUMN "general_contact_email" TO "contact_email";
  ALTER TABLE "site_settings" RENAME COLUMN "general_phone" TO "phone";
  ALTER TABLE "site_settings" RENAME COLUMN "general_address" TO "address";
  `)
}
