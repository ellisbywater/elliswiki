export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    { name: "title", title: "Project Title", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "stack",
      title: "Technology Stack",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "link",
      title: "Link",
      type: "url",
    },
    {
      name: "github",
      title: "Github",
      type: "url",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
