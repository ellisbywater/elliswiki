/*
 * Doesn't cover all the data fields.
 * Remove or set readOnly to `false` if you want to be able
 * to edit the responses in the Studio
 */

export default {
  name: "submission.form",
  type: "document",
  title: "Form submission",
  readOnly: false,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "number",
      type: "number",
      title: "Number",
    },
    {
      name: "created_at",
      type: "datetime",
      title: "Created at",
    },
    {
      name: "data",
      type: "object",
      title: "Data",
      fields: [
        {
          name: "email",
          type: "string",
          title: "Email",
          validation: (Rule) =>
            Rule.regex(
              /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
              {
                name: "email", // Error message is "Does not match email-pattern"
                invert: false, // Boolean to allow any value that does NOT match pattern
              }
            ),
        },
        {
          name: "name",
          type: "string",
          title: "Name",
        },
        {
          name: "phone",
          type: "string",
          title: "Phone",
          validation: (Rule) =>
            Rule.regex(/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/, {
              name: "phone", // Error message is "Does not match phone-pattern"
              invert: false, // Boolean to allow any value that does NOT match pattern
            }),
        },
        {
          name: "message",
          type: "text",
          title: "Message",
        },
      ],
    },
  ],
};
