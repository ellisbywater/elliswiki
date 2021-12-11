export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "title",
      title: "Site Title",
      type: "string",
    },
    {
      name: "description",
      title: "Meta Description",
      type: "text",
    },
    {
      name: "xslogo",
      title: "32x32 Logo",
      type: "image",
    },
    {
      name: "slogo",
      title: "64x64 Logo",
      type: "image",
    },
  ],
};
