// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    output: 'static',
    site: 'https://nikosetiawanp.github.io',
    base: 'frontendmentor-personal-blog',
    vite: {
    plugins: [tailwindcss()],
  },
    markdown: {
      syntaxHighlight: 'shiki',
      shikiConfig: {
        themes: {
          light: 'gruvbox-light-medium',
          dark: 'github-dark'
        },
        defaultColor: false
      },
    }
});
