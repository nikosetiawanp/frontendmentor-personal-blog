// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import customTheme from './src/scripts/custom-theme';
import { rehypeShiki } from '@astrojs/markdown-remark';

// https://astro.build/config
export default defineConfig({
    site: 'https://nikosetiawanp.github.io',
    base: 'frontendmentor-personal-blog',
    vite: {
    plugins: [tailwindcss()],
  },
    markdown: {
      syntaxHighlight: 'shiki',
      shikiConfig: {
        // @ts-ignore
        theme: customTheme,
      },
    }
});
