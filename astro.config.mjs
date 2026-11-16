import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Primary domain decision pending final confirm; swap here if it changes.
export default defineConfig({
  site: 'https://cramir.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
