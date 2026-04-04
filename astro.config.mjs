import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://stayjustin.com',
  integrations: [tailwind()],
});
