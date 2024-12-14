import { appTools, defineConfig } from "@modern-js/app-tools";
import tailwindcssPlugin from "@modern-js/plugin-tailwindcss";

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: "rspack", // Set to 'webpack' to enable webpack
    }),
    tailwindcssPlugin(),
  ],
  html: {
    title: "GoDrive - Car Rental",

    tags: [
      {
        tag: "meta",
        attrs: {
          name: "theme-color",
          content:  "#0065ff"
        },
      },
    ],
  },
  tools: {
    swc: {
      jsc: {
        externalHelpers: false,
        experimental: {
          plugins: [
            [
              "@swc/plugin-styled-components",
              {
                displayName: true,
                ssr: true,
              },
            ],
          ],
        },
      },
    },
  },
});
