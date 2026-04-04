import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://stayjustin.com', // 👈 THIS is the key line
  integrations: [tailwind(), sitemap()],
});
