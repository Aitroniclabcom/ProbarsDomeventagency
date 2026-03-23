import path from "path";
import { buildConfig } from "payload/config";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";

import { Pages } from "./collections/Pages";
import { Media } from "./collections/Media";
import { BlogPosts } from "./collections/BlogPosts";
import { Navigation } from "./globals/Navigation";
import { SiteSettings } from "./globals/SiteSettings";

export default buildConfig({
  serverURL: process.env.PAYLOAD_URL || "http://localhost:3001",
  admin: {
    user: "users",
    bundler: webpackBundler(),
    meta: {
      titleSuffix: "— D.O.M. CMS",
      favicon: "/favicon.ico",
    },
  },
  editor: slateEditor({}),
  collections: [
    Pages,
    Media,
    BlogPosts,
    {
      slug: "users",
      auth: true,
      admin: { useAsTitle: "email" },
      fields: [
        { name: "name", type: "text" },
      ],
    },
  ],
  globals: [Navigation, SiteSettings],
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || "",
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: { disable: true },
  cors: [
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ],
  csrf: [
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ],
});
