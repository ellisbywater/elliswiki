export default {
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "subHeading",
      title: "Sub Heading",
      type: "string",
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "linkedIn",
      title: "LinkedIn",
      type: "string",
    },
    {
      name: "github",
      title: "GitHub",
      type: "string",
    },
    {
      name: "medium",
      title: "Medium",
      type: "string",
    },
  ],
};
