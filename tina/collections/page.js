/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Page Content",
  name: "page",
  path: "content/page",
  format: "mdx",
  fields: [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "link",
      label: "link",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
      ui: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:MM:SS'
      }
    },
    {
      name: "body",
      label: "Main Content",
      type: "rich-text",
      isBody: true,
    },
  ],
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      }
      return undefined;
    },
  },
};
