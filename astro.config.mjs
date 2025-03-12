// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeFlexoki from "starlight-theme-flexoki";

// https://astro.build/config
export default defineConfig({
  site: "https://notes.florluzduarte.com",
  integrations: [
    starlight({
      title: "Flor Luz Duarte | Notes",
      customCss: [
        "./src/styles/custom-styles.css",
        "@fontsource/istok-web/400.css",
        "@fontsource/istok-web/700.css",
      ],
      social: {
        github: "https://github.com/florluzduarte/notes",
      },
      plugins: [
        starlightThemeFlexoki({
          accentColor: "magenta",
        }),
      ],
      sidebar: [
        {
          label: "Start Here",
          autogenerate: { directory: "start-here", collapsed: true },
        },
        {
          label: "Development",
          autogenerate: { directory: "development", collapsed: true },
        },
        {
          label: "Design",
          autogenerate: { directory: "design", collapsed: true },
        },
        {
          label: "Product",
          autogenerate: { directory: "product", collapsed: true },
        },
        {
          label: "Business",
          autogenerate: { directory: "business", collapsed: true },
        },
        {
          label: "Books",
          autogenerate: { directory: "books", collapsed: true },
        },
        {
          label: "Research",
          autogenerate: { directory: "research", collapsed: true },
        },
        {
          label: "Hobbies",
          autogenerate: { directory: "hobbies", collapsed: true },
        },
      ],
      credits: true,
    }),
  ],
});
