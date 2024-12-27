import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';

import vercel from '@astrojs/vercel';

export default defineConfig({
  // used to generate images
  site:
    process.env.VERCEL_ENV === 'production'
      ? 'https://www.iamcpdev.me/'
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}/`
        : 'https://localhost:3000/',

  trailingSlash: 'never',
  integrations: [sitemap(), UnoCSS({ injectReset: true })],

  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },

  adapter: vercel(),
});