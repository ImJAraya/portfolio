import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://portfolio-jafm.netlify.app',
  integrations: [tailwind()],
});
