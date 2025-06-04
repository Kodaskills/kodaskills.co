import {
  type GitHubConfig,
  type LocalConfig,
  collection,
  config,
  fields,
} from "@keystatic/core";
import { wrapper } from "@keystatic/core/content-components";

const { PROD } = import.meta.env;

const githubStorage = {
  kind: "github",
  repo: {
    owner: "Kodaskills",
    name: "kodaskills.co",
  },
} as GitHubConfig["storage"];

const localStorage = {
  kind: "local",
} as LocalConfig["storage"];

const imageConfig = {
  directory: "src/assets/images/posts",
  publicPath: "@assets/images/posts/",
};

export default config({
  ui: {
    brand: { name: "Kodaskills" },
  },
  storage: PROD ? githubStorage : localStorage,
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
                class: fields.text({ label: "class" }),
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
