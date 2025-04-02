import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // site: 'http://localhost:4321',
  site: 'https://afiiif.github.io',
  integrations: [tailwind()],
});
