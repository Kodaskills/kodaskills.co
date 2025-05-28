import { collection, config, fields } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: "Kodaskills",
      name: "kodaskills.co",
    },
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "blog/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.mdx({ label: "Content" }),
        description: fields.text({ label: "Description" }),
        layout: fields.text({ label: "Layout" }),
        date: fields.date({ label: "Publish date" }),
        image: fields.object(
          {
            src: fields.text({ label: "Image Path or URL" }),
            alt: fields.text({ label: "Alt Text" }),
            width: fields.integer({ label: "Width (px)" }),
            height: fields.integer({ label: "Height (px)" }),
          },
          {
            label: "Image",
          },
        ),
      },
    }),
  },
});
