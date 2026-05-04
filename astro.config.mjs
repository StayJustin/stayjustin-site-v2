import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import SpeedInsights from "@vercel/speed-insights/astro"

export default defineConfig({
  site: 'https://www.stayjustin.com',
  integrations: [sitemap()],
});
