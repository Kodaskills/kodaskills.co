import { collection, config, fields } from "@keystatic/core";
import { wrapper } from "@keystatic/core/content-components";

const isGithub = import.meta.env.KEYSTATIC_STORAGE === "github";
const imageConfig = {
  directory: "src/assets/images/posts",
  publicPath: "@assets/images/posts/",
};

export default config({
  ui: {
    brand: { name: "Kodaskills" },
  },
  storage: isGithub
    ? {
        kind: "github",
        repo: {
          owner: "Kodaskills",
          name: "kodaskills.co",
        },
      }
    : {
        kind: "local",
      },

  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      entryLayout: "content",
      path: "blog/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description" }),
        content: fields.mdx({
          label: "Content",
          options: {
            image: imageConfig,
          },
          components: {
            Link: wrapper({
              label: "Link",
              schema: {
                href: fields.text({ label: "href" }),
              },
            }),
          },
        }),
        date: fields.date({ label: "Publish date" }),
        cover: fields.image({
          label: "Cover",
          ...imageConfig,
        }),
        coverAlt: fields.text({ label: "Cover alt" }),
      },
    }),
  },
});
