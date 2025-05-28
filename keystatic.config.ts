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
        content: fields.markdoc({ label: "Content" }),
      },
    }),
  },
});
