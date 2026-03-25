import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('lv', 'ru', 'en');
  CREATE TABLE "pages_blocks_gallery_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"caption" varchar
  );
  
  CREATE TABLE "pages_locales" (
  	"title" varchar NOT NULL,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "site_settings_locales" (
  	"general_address" varchar,
  	"footer_tagline" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "pages_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_rels" CASCADE;
  ALTER TABLE "pages_blocks_cta" ALTER COLUMN "heading" SET NOT NULL;
  ALTER TABLE "pages_blocks_hero" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "pages_blocks_hero" ADD COLUMN "background_image_id" integer;
  ALTER TABLE "pages_blocks_rich_text" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "pages_blocks_team_members" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "pages_blocks_team" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "pages_blocks_gallery" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "pages_blocks_cta" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "pages_blocks_partners_partners" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "pages_blocks_partners" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "pages_blocks_event_builder_services" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "pages_blocks_event_builder" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "site_settings_header_nav_links" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "site_settings_footer_footer_links" ADD COLUMN "_locale" "_locales" NOT NULL;
  ALTER TABLE "pages_blocks_gallery_images" ADD CONSTRAINT "pages_blocks_gallery_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_gallery_images" ADD CONSTRAINT "pages_blocks_gallery_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_locales" ADD CONSTRAINT "site_settings_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_gallery_images_order_idx" ON "pages_blocks_gallery_images" USING btree ("_order");
  CREATE INDEX "pages_blocks_gallery_images_parent_id_idx" ON "pages_blocks_gallery_images" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_gallery_images_locale_idx" ON "pages_blocks_gallery_images" USING btree ("_locale");
  CREATE INDEX "pages_blocks_gallery_images_image_idx" ON "pages_blocks_gallery_images" USING btree ("image_id");
  CREATE UNIQUE INDEX "pages_locales_locale_parent_id_unique" ON "pages_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "site_settings_locales_locale_parent_id_unique" ON "site_settings_locales" USING btree ("_locale","_parent_id");
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_blocks_hero_locale_idx" ON "pages_blocks_hero" USING btree ("_locale");
  CREATE INDEX "pages_blocks_hero_background_image_idx" ON "pages_blocks_hero" USING btree ("background_image_id");
  CREATE INDEX "pages_blocks_rich_text_locale_idx" ON "pages_blocks_rich_text" USING btree ("_locale");
  CREATE INDEX "pages_blocks_team_members_locale_idx" ON "pages_blocks_team_members" USING btree ("_locale");
  CREATE INDEX "pages_blocks_team_locale_idx" ON "pages_blocks_team" USING btree ("_locale");
  CREATE INDEX "pages_blocks_gallery_locale_idx" ON "pages_blocks_gallery" USING btree ("_locale");
  CREATE INDEX "pages_blocks_cta_locale_idx" ON "pages_blocks_cta" USING btree ("_locale");
  CREATE INDEX "pages_blocks_partners_partners_locale_idx" ON "pages_blocks_partners_partners" USING btree ("_locale");
  CREATE INDEX "pages_blocks_partners_locale_idx" ON "pages_blocks_partners" USING btree ("_locale");
  CREATE INDEX "pages_blocks_event_builder_services_locale_idx" ON "pages_blocks_event_builder_services" USING btree ("_locale");
  CREATE INDEX "pages_blocks_event_builder_locale_idx" ON "pages_blocks_event_builder" USING btree ("_locale");
  CREATE INDEX "site_settings_header_nav_links_locale_idx" ON "site_settings_header_nav_links" USING btree ("_locale");
  CREATE INDEX "site_settings_footer_footer_links_locale_idx" ON "site_settings_footer_footer_links" USING btree ("_locale");
  ALTER TABLE "pages" DROP COLUMN "title";
  ALTER TABLE "pages" DROP COLUMN "seo_title";
  ALTER TABLE "pages" DROP COLUMN "seo_description";
  ALTER TABLE "site_settings" DROP COLUMN "general_address";
  ALTER TABLE "site_settings" DROP COLUMN "footer_tagline";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  ALTER TABLE "pages_blocks_gallery_images" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_locales" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings_locales" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_gallery_images" CASCADE;
  DROP TABLE "pages_locales" CASCADE;
  DROP TABLE "site_settings_locales" CASCADE;
  ALTER TABLE "pages_blocks_hero" DROP CONSTRAINT "pages_blocks_hero_background_image_id_media_id_fk";
  
  DROP INDEX "pages_blocks_hero_locale_idx";
  DROP INDEX "pages_blocks_hero_background_image_idx";
  DROP INDEX "pages_blocks_rich_text_locale_idx";
  DROP INDEX "pages_blocks_team_members_locale_idx";
  DROP INDEX "pages_blocks_team_locale_idx";
  DROP INDEX "pages_blocks_gallery_locale_idx";
  DROP INDEX "pages_blocks_cta_locale_idx";
  DROP INDEX "pages_blocks_partners_partners_locale_idx";
  DROP INDEX "pages_blocks_partners_locale_idx";
  DROP INDEX "pages_blocks_event_builder_services_locale_idx";
  DROP INDEX "pages_blocks_event_builder_locale_idx";
  DROP INDEX "site_settings_header_nav_links_locale_idx";
  DROP INDEX "site_settings_footer_footer_links_locale_idx";
  ALTER TABLE "pages_blocks_cta" ALTER COLUMN "heading" DROP NOT NULL;
  ALTER TABLE "pages" ADD COLUMN "title" varchar NOT NULL;
  ALTER TABLE "pages" ADD COLUMN "seo_title" varchar;
  ALTER TABLE "pages" ADD COLUMN "seo_description" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "general_address" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "footer_tagline" varchar;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_media_id_idx" ON "pages_rels" USING btree ("media_id");
  ALTER TABLE "pages_blocks_hero" DROP COLUMN "_locale";
  ALTER TABLE "pages_blocks_hero" DROP COLUMN "background_image_id";
  ALTER TABLE "pages_blocks_rich_text" DROP COLUMN "_locale";
  ALTER TABLE "pages_blocks_team_members" DROP COLUMN "_locale";
  ALTER TABLE "pages_blocks_team" DROP COLUMN "_locale";
  ALTER TABLE "pages_blocks_gallery" DROP COLUMN "_locale";
  ALTER TABLE "pages_blocks_cta" DROP COLUMN "_locale";
  ALTER TABLE "pages_blocks_partners_partners" DROP COLUMN "_locale";
  ALTER TABLE "pages_blocks_partners" DROP COLUMN "_locale";
  ALTER TABLE "pages_blocks_event_builder_services" DROP COLUMN "_locale";
  ALTER TABLE "pages_blocks_event_builder" DROP COLUMN "_locale";
  ALTER TABLE "site_settings_header_nav_links" DROP COLUMN "_locale";
  ALTER TABLE "site_settings_footer_footer_links" DROP COLUMN "_locale";
  DROP TYPE "public"."_locales";`)
}
