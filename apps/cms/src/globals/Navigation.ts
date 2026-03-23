import { GlobalConfig } from "payload/types";

export const Navigation: GlobalConfig = {
  slug: "navigation",
  access: { read: () => true },
  fields: [
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "links",
      type: "array",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "labelLv", type: "text" },
        { name: "labelRu", type: "text" },
        { name: "href", type: "text", required: true },
        { name: "isExternal", type: "checkbox", defaultValue: false },
      ],
    },
    {
      name: "footerColumns",
      type: "array",
      fields: [
        { name: "heading", type: "text" },
        {
          name: "links",
          type: "array",
          fields: [
            { name: "label", type: "text" },
            { name: "href", type: "text" },
          ],
        },
      ],
    },
    {
      name: "socialLinks",
      type: "group",
      fields: [
        { name: "instagram", type: "text" },
        { name: "facebook", type: "text" },
        { name: "tiktok", type: "text" },
        { name: "email", type: "email" },
        { name: "phone", type: "text" },
      ],
    },
  ],
};
