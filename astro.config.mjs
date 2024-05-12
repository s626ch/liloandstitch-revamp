import { defineConfig } from 'astro/config';
// import { remarkCustomEmoji } from './src/remark-plugins/customEmoji';

import mdx from "@astrojs/mdx";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://liloandstit.ch/',
  markdown: {/*
             remarkPlugins: [
             remarkCustomEmoji
             ]*/ // @ me if you want custom emoji support and i'll add my plugin FAGGOT
  },
  integrations: [mdx(), svelte()]
});