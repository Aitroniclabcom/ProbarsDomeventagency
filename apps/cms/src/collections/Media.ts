import { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
  slug: "media",
  admin: { useAsTitle: "alt" },
  access: { read: () => true },
  upload: {
    staticURL: "/media",
    staticDir: "media",
    imageSizes: [
      { name: "thumbnail", width: 400, height: 300, crop: "center" },
      { name: "card", width: 768, height: 512, crop: "center" },
      { name: "hero", width: 1920, height: 1080, crop: "center" },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
  },
  fields: [
    { name: "alt", type: "text", required: true },
    { name: "caption", type: "text" },
  ],
};
