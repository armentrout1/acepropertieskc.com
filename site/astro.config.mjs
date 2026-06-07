// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: "https://acepropertieskc.com",
  trailingSlash: "always",
  output: 'static',
  devToolbar: {
    enabled: false,
  },
  redirects: {
    "/getoffer/": {
      status: 301,
      destination: "/get-offer/",
    },
    "/services/": {
      status: 301,
      destination: "/solutions/",
    },
    "/contact-local-home-buyers/": {
      status: 301,
      destination: "/contact/",
    },
    "/about-us/": {
      status: 301,
      destination: "/about/",
    },
    "/free-info/": {
      status: 301,
      destination: "/resources/",
    },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      entries: [
        "src/components/**/*.{astro,js,jsx,ts,tsx}",
        "src/data/**/*.{js,ts}",
        "src/layouts/**/*.{astro,js,ts}",
        "src/lib/**/*.{js,ts}",
        "src/pages/**/*.{astro,md,mdx}",
      ],
      exclude: ["@sendgrid/mail", "aria-query", "axobject-query"],
    },
  },
  adapter: node({
    mode: 'standalone'
  }),

  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/thank-you/"),
    }),
    mdx()
  ]
});
