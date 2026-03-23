import { CollectionConfig } from "payload/types";

export const BlogPosts: CollectionConfig = {
  slug: "blog-posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "publishedAt", "status"],
  },
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "status",
      type: "select",
      defaultValue: "draft",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
      ],
      admin: { position: "sidebar" },
    },
    {
      name: "publishedAt",
      type: "date",
      admin: { position: "sidebar" },
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "excerpt",
      type: "textarea",
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "tags",
      type: "array",
      fields: [{ name: "tag", type: "text" }],
    },
    // Multi-language support
    {
      name: "titleLv",
      type: "text",
      admin: { description: "Title in Latvian" },
    },
    {
      name: "titleRu",
      type: "text",
      admin: { description: "Title in Russian" },
    },
    {
      name: "excerptLv",
      type: "textarea",
    },
    {
      name: "excerptRu",
      type: "textarea",
    },
    {
      name: "contentLv",
      type: "richText",
    },
    {
      name: "contentRu",
      type: "richText",
    },
  ],
};
