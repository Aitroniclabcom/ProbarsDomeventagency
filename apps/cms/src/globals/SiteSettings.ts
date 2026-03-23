import { GlobalConfig } from "payload/types";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  access: { read: () => true },
  fields: [
    { name: "siteName", type: "text", defaultValue: "D.O.M. Event Agency" },
    { name: "tagline", type: "text" },
    { name: "taglineLv", type: "text" },
    { name: "taglineRu", type: "text" },
    { name: "defaultSeoTitle", type: "text" },
    { name: "defaultSeoDescription", type: "textarea" },
    { name: "defaultSeoImage", type: "upload", relationTo: "media" },
    {
      name: "contact",
      type: "group",
      fields: [
        { name: "email", type: "email" },
        { name: "phone", type: "text" },
        { name: "address", type: "textarea" },
      ],
    },
    {
      name: "revalidateSecret",
      type: "text",
      admin: { description: "Secret token for triggering Next.js ISR revalidation" },
    },
  ],
};
