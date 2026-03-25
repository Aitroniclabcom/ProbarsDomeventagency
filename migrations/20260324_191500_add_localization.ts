import { MigrateDownArgs, MigrateUpArgs, sql } from '@payloadcms/db-postgres'

/**
 * Hand-written migration (Drizzle migrate:create prompts are interactive on Windows).
 * Aligns DB with Payload localization (lv/ru/en) + localized fields + gallery array + hero background.
 */
export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  DO $$ BEGIN
    CREATE TYPE "public"."enum__locales" AS ENUM ('lv', 'ru', 'en');
  EXCEPTION
    WHEN duplicate_object THEN NULL;
  END $$;

  CREATE TABLE IF NOT EXISTS "pages_locales" (
    "id" serial PRIMARY KEY NOT NULL,
    "title" varchar NOT NULL,
    "seo_title" varchar,
    "seo_description" varchar,
    "_locale" "enum__locales" NOT NULL,
    "_parent_id" integer NOT NULL
  );

  DO $$ BEGIN
    ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN NULL;
  END $$;

  CREATE UNIQUE INDEX IF NOT EXISTS "pages_locales_locale_parent_id_unique" ON "pages_locales" USING btree ("_locale", "_parent_id");

  INSERT INTO "pages_locales" ("title", "seo_title", "seo_description", "_locale", "_parent_id")
  SELECT COALESCE(p."title", ''), p."seo_title", p."seo_description", 'lv'::"enum__locales", p."id"
  FROM "pages" p
  WHERE EXISTS (
    SELECT 1 FROM information_schema.columns c
    WHERE c.table_schema = 'public' AND c.table_name = 'pages' AND c.column_name = 'title'
  )
  AND NOT EXISTS (
    SELECT 1 FROM "pages_locales" pl WHERE pl."_parent_id" = p."id" AND pl."_locale" = 'lv'::"enum__locales"
  );

  DO $$ BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'pages' AND column_name = 'title') THEN
      ALTER TABLE "pages" DROP COLUMN "title";
    END IF;
  END $$;
  DO $$ BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'pages' AND column_name = 'seo_title') THEN
      ALTER TABLE "pages" DROP COLUMN "seo_title";
    END IF;
  END $$;
  DO $$ BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'pages' AND column_name = 'seo_description') THEN
      ALTER TABLE "pages" DROP COLUMN "seo_description";
    END IF;
  END $$;

  CREATE TABLE IF NOT EXISTS "site_settings_locales" (
    "id" serial PRIMARY KEY NOT NULL,
    "general_address" varchar,
    "footer_tagline" varchar,
    "_locale" "enum__locales" NOT NULL,
    "_parent_id" integer NOT NULL
  );

  DO $$ BEGIN
    ALTER TABLE "site_settings_locales" ADD CONSTRAINT "site_settings_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN NULL;
  END $$;

  CREATE UNIQUE INDEX IF NOT EXISTS "site_settings_locales_locale_parent_id_unique" ON "site_settings_locales" USING btree ("_locale", "_parent_id");

  INSERT INTO "site_settings_locales" ("general_address", "footer_tagline", "_locale", "_parent_id")
  SELECT s."general_address", s."footer_tagline", 'lv'::"enum__locales", s."id"
  FROM "site_settings" s
  WHERE EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'site_settings' AND column_name = 'general_address')
  AND NOT EXISTS (
    SELECT 1 FROM "site_settings_locales" sl WHERE sl."_parent_id" = s."id" AND sl."_locale" = 'lv'::"enum__locales"
  );

  DO $$ BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'site_settings' AND column_name = 'general_address') THEN
      ALTER TABLE "site_settings" DROP COLUMN "general_address";
    END IF;
  END $$;
  DO $$ BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'site_settings' AND column_name = 'footer_tagline') THEN
      ALTER TABLE "site_settings" DROP COLUMN "footer_tagline";
    END IF;
  END $$;

  ALTER TABLE "site_settings_header_nav_links" ADD COLUMN IF NOT EXISTS "_locale" "enum__locales";
  UPDATE "site_settings_header_nav_links" SET "_locale" = 'lv'::"enum__locales" WHERE "_locale" IS NULL;
  ALTER TABLE "site_settings_header_nav_links" ALTER COLUMN "_locale" SET NOT NULL;
  CREATE INDEX IF NOT EXISTS "site_settings_header_nav_links_locale_idx" ON "site_settings_header_nav_links" USING btree ("_locale");

  ALTER TABLE "site_settings_footer_footer_links" ADD COLUMN IF NOT EXISTS "_locale" "enum__locales";
  UPDATE "site_settings_footer_footer_links" SET "_locale" = 'lv'::"enum__locales" WHERE "_locale" IS NULL;
  ALTER TABLE "site_settings_footer_footer_links" ALTER COLUMN "_locale" SET NOT NULL;
  CREATE INDEX IF NOT EXISTS "site_settings_footer_footer_links_locale_idx" ON "site_settings_footer_footer_links" USING btree ("_locale");

  CREATE TABLE IF NOT EXISTS "pages_blocks_gallery_images" (
    "_order" integer NOT NULL,
    "_parent_id" varchar NOT NULL,
    "_locale" "enum__locales" NOT NULL,
    "id" varchar PRIMARY KEY NOT NULL,
    "image_id" integer NOT NULL,
    "caption" varchar
  );

  DO $$ BEGIN
    ALTER TABLE "pages_blocks_gallery_images" ADD CONSTRAINT "pages_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN NULL;
  END $$;

  DO $$ BEGIN
    ALTER TABLE "pages_blocks_gallery_images" ADD CONSTRAINT "pages_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE restrict ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN NULL;
  END $$;

  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_images_order_idx" ON "pages_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_images_parent_id_idx" ON "pages_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_images_locale_idx" ON "pages_blocks_gallery_images" USING btree ("_locale");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_images_image_idx" ON "pages_blocks_gallery_images" USING btree ("image_id");

  ALTER TABLE "pages_blocks_hero" ADD COLUMN IF NOT EXISTS "_locale" "enum__locales";
  UPDATE "pages_blocks_hero" SET "_locale" = 'lv'::"enum__locales" WHERE "_locale" IS NULL;
  ALTER TABLE "pages_blocks_hero" ALTER COLUMN "_locale" SET NOT NULL;
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_locale_idx" ON "pages_blocks_hero" USING btree ("_locale");

  ALTER TABLE "pages_blocks_hero" ADD COLUMN IF NOT EXISTS "background_image_id" integer;
  DO $$ BEGIN
    ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN NULL;
  END $$;
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_background_image_idx" ON "pages_blocks_hero" USING btree ("background_image_id");

  UPDATE "pages_blocks_hero" SET "heading" = '' WHERE "heading" IS NULL;
  ALTER TABLE "pages_blocks_hero" ALTER COLUMN "heading" SET NOT NULL;

  ALTER TABLE "pages_blocks_rich_text" ADD COLUMN IF NOT EXISTS "_locale" "enum__locales";
  UPDATE "pages_blocks_rich_text" SET "_locale" = 'lv'::"enum__locales" WHERE "_locale" IS NULL;
  ALTER TABLE "pages_blocks_rich_text" ALTER COLUMN "_locale" SET NOT NULL;
  CREATE INDEX IF NOT EXISTS "pages_blocks_rich_text_locale_idx" ON "pages_blocks_rich_text" USING btree ("_locale");

  ALTER TABLE "pages_blocks_team" ADD COLUMN IF NOT EXISTS "_locale" "enum__locales";
  UPDATE "pages_blocks_team" SET "_locale" = 'lv'::"enum__locales" WHERE "_locale" IS NULL;
  ALTER TABLE "pages_blocks_team" ALTER COLUMN "_locale" SET NOT NULL;
  CREATE INDEX IF NOT EXISTS "pages_blocks_team_locale_idx" ON "pages_blocks_team" USING btree ("_locale");

  ALTER TABLE "pages_blocks_team_members" ADD COLUMN IF NOT EXISTS "_locale" "enum__locales";
  UPDATE "pages_blocks_team_members" SET "_locale" = 'lv'::"enum__locales" WHERE "_locale" IS NULL;
  ALTER TABLE "pages_blocks_team_members" ALTER COLUMN "_locale" SET NOT NULL;
  CREATE INDEX IF NOT EXISTS "pages_blocks_team_members_locale_idx" ON "pages_blocks_team_members" USING btree ("_locale");

  ALTER TABLE "pages_blocks_gallery" ADD COLUMN IF NOT EXISTS "_locale" "enum__locales";
  UPDATE "pages_blocks_gallery" SET "_locale" = 'lv'::"enum__locales" WHERE "_locale" IS NULL;
  ALTER TABLE "pages_blocks_gallery" ALTER COLUMN "_locale" SET NOT NULL;
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_locale_idx" ON "pages_blocks_gallery" USING btree ("_locale");

  ALTER TABLE "pages_blocks_cta" ADD COLUMN IF NOT EXISTS "_locale" "enum__locales";
  UPDATE "pages_blocks_cta" SET "_locale" = 'lv'::"enum__locales" WHERE "_locale" IS NULL;
  ALTER TABLE "pages_blocks_cta" ALTER COLUMN "_locale" SET NOT NULL;
  CREATE INDEX IF NOT EXISTS "pages_blocks_cta_locale_idx" ON "pages_blocks_cta" USING btree ("_locale");
  UPDATE "pages_blocks_cta" SET "heading" = '' WHERE "heading" IS NULL;
  ALTER TABLE "pages_blocks_cta" ALTER COLUMN "heading" SET NOT NULL;

  ALTER TABLE "pages_blocks_partners" ADD COLUMN IF NOT EXISTS "_locale" "enum__locales";
  UPDATE "pages_blocks_partners" SET "_locale" = 'lv'::"enum__locales" WHERE "_locale" IS NULL;
  ALTER TABLE "pages_blocks_partners" ALTER COLUMN "_locale" SET NOT NULL;
  CREATE INDEX IF NOT EXISTS "pages_blocks_partners_locale_idx" ON "pages_blocks_partners" USING btree ("_locale");

  ALTER TABLE "pages_blocks_partners_partners" ADD COLUMN IF NOT EXISTS "_locale" "enum__locales";
  UPDATE "pages_blocks_partners_partners" SET "_locale" = 'lv'::"enum__locales" WHERE "_locale" IS NULL;
  ALTER TABLE "pages_blocks_partners_partners" ALTER COLUMN "_locale" SET NOT NULL;
  CREATE INDEX IF NOT EXISTS "pages_blocks_partners_partners_locale_idx" ON "pages_blocks_partners_partners" USING btree ("_locale");

  ALTER TABLE "pages_blocks_event_builder" ADD COLUMN IF NOT EXISTS "_locale" "enum__locales";
  UPDATE "pages_blocks_event_builder" SET "_locale" = 'lv'::"enum__locales" WHERE "_locale" IS NULL;
  ALTER TABLE "pages_blocks_event_builder" ALTER COLUMN "_locale" SET NOT NULL;
  CREATE INDEX IF NOT EXISTS "pages_blocks_event_builder_locale_idx" ON "pages_blocks_event_builder" USING btree ("_locale");

  ALTER TABLE "pages_blocks_event_builder_services" ADD COLUMN IF NOT EXISTS "_locale" "enum__locales";
  UPDATE "pages_blocks_event_builder_services" SET "_locale" = 'lv'::"enum__locales" WHERE "_locale" IS NULL;
  ALTER TABLE "pages_blocks_event_builder_services" ALTER COLUMN "_locale" SET NOT NULL;
  CREATE INDEX IF NOT EXISTS "pages_blocks_event_builder_services_locale_idx" ON "pages_blocks_event_builder_services" USING btree ("_locale");
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  DROP TABLE IF EXISTS "pages_blocks_gallery_images" CASCADE;

  ALTER TABLE "pages_blocks_event_builder_services" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "pages_blocks_event_builder" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "pages_blocks_partners_partners" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "pages_blocks_partners" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "pages_blocks_cta" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "pages_blocks_gallery" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "pages_blocks_team_members" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "pages_blocks_team" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "pages_blocks_rich_text" DROP COLUMN IF EXISTS "_locale";

  ALTER TABLE "pages_blocks_hero" DROP CONSTRAINT IF EXISTS "pages_blocks_hero_background_image_id_media_id_fk";
  DROP INDEX IF EXISTS "pages_blocks_hero_background_image_idx";
  ALTER TABLE "pages_blocks_hero" DROP COLUMN IF EXISTS "background_image_id";
  ALTER TABLE "pages_blocks_hero" DROP COLUMN IF EXISTS "_locale";

  DROP INDEX IF EXISTS "pages_blocks_event_builder_services_locale_idx";
  DROP INDEX IF EXISTS "pages_blocks_event_builder_locale_idx";
  DROP INDEX IF EXISTS "pages_blocks_partners_partners_locale_idx";
  DROP INDEX IF EXISTS "pages_blocks_partners_locale_idx";
  DROP INDEX IF EXISTS "pages_blocks_cta_locale_idx";
  DROP INDEX IF EXISTS "pages_blocks_gallery_locale_idx";
  DROP INDEX IF EXISTS "pages_blocks_team_members_locale_idx";
  DROP INDEX IF EXISTS "pages_blocks_team_locale_idx";
  DROP INDEX IF EXISTS "pages_blocks_rich_text_locale_idx";
  DROP INDEX IF EXISTS "pages_blocks_hero_locale_idx";

  ALTER TABLE "pages_blocks_cta" ALTER COLUMN "heading" DROP NOT NULL;
  ALTER TABLE "pages_blocks_hero" ALTER COLUMN "heading" DROP NOT NULL;

  ALTER TABLE "site_settings_footer_footer_links" DROP COLUMN IF EXISTS "_locale";
  ALTER TABLE "site_settings_header_nav_links" DROP COLUMN IF EXISTS "_locale";
  DROP INDEX IF EXISTS "site_settings_footer_footer_links_locale_idx";
  DROP INDEX IF EXISTS "site_settings_header_nav_links_locale_idx";

  DROP TABLE IF EXISTS "site_settings_locales" CASCADE;
  DROP TABLE IF EXISTS "pages_locales" CASCADE;

  ALTER TABLE "site_settings" ADD COLUMN IF NOT EXISTS "general_address" varchar;
  ALTER TABLE "site_settings" ADD COLUMN IF NOT EXISTS "footer_tagline" varchar;
  ALTER TABLE "pages" ADD COLUMN IF NOT EXISTS "title" varchar;
  ALTER TABLE "pages" ADD COLUMN IF NOT EXISTS "seo_title" varchar;
  ALTER TABLE "pages" ADD COLUMN IF NOT EXISTS "seo_description" varchar;

  DROP TYPE IF EXISTS "enum__locales";
  `)
}
