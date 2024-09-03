import { defineConfig } from 'astro/config';
//import mdx from "@astrojs/mdx";
//import sitemap from "@astrojs/sitemap";
import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    site: 'https://olivermegan.github.io',
    base: '/writeups',
    integrations: [tailwind(), mdx()]
});