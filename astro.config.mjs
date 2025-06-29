// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import darkTheme from './src/scripts/dark-theme';
import lightTheme from './src/scripts/light-theme';

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
          // @ts-ignore
          light: lightTheme,
            // @ts-ignore
          dark: darkTheme
        },
        defaultColor: false
      },
    }
});
