import { CollectionConfig } from "payload/types";

const heroBlock = {
  slug: "hero",
  labels: { singular: "Hero", plural: "Heroes" },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "subheading", type: "text" },
    { name: "ctaLabel", type: "text" },
    { name: "ctaHref", type: "text" },
    { name: "backgroundImage", type: "upload", relationTo: "media" },
  ],
};

const richTextBlock = {
  slug: "richText",
  labels: { singular: "Rich Text", plural: "Rich Text Blocks" },
  fields: [
    { name: "content", type: "richText", required: true },
    {
      name: "alignment",
      type: "select",
      defaultValue: "left",
      options: [
        { label: "Left", value: "left" },
        { label: "Center", value: "center" },
      ],
    },
  ],
};

const galleryBlock = {
  slug: "gallery",
  labels: { singular: "Gallery", plural: "Galleries" },
  fields: [
    { name: "title", type: "text" },
    {
      name: "images",
      type: "array",
      fields: [
        { name: "image", type: "upload", relationTo: "media", required: true },
        { name: "caption", type: "text" },
      ],
    },
  ],
};

const teamBlock = {
  slug: "team",
  labels: { singular: "Team", plural: "Team Blocks" },
  fields: [
    { name: "title", type: "text" },
    {
      name: "members",
      type: "array",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "role", type: "text" },
        { name: "bio", type: "textarea" },
        { name: "photo", type: "upload", relationTo: "media" },
      ],
    },
  ],
};

const faqBlock = {
  slug: "faq",
  labels: { singular: "FAQ", plural: "FAQs" },
  fields: [
    { name: "title", type: "text" },
    {
      name: "items",
      type: "array",
      fields: [
        { name: "question", type: "text", required: true },
        { name: "answer", type: "richText", required: true },
      ],
    },
  ],
};

const ctaBlock = {
  slug: "cta",
  labels: { singular: "Call to Action", plural: "Calls to Action" },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "buttonLabel", type: "text" },
    { name: "buttonHref", type: "text" },
  ],
};

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: { description: "URL path (e.g. 'home', 'about')" },
    },
    {
      name: "meta",
      type: "group",
      fields: [
        { name: "title", type: "text" },
        { name: "description", type: "textarea" },
        { name: "image", type: "upload", relationTo: "media" },
      ],
    },
    {
      name: "layout",
      type: "blocks",
      blocks: [heroBlock, richTextBlock, galleryBlock, teamBlock, faqBlock, ctaBlock],
    },
  ],
};
