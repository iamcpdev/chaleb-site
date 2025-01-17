import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';

import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  // used to generate images
  site:
    process.env.VERCEL_ENV === 'production'
      ? 'https://www.iamcpdev.me/'
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}/`
        : 'https://localhost:3000/',

  trailingSlash: 'ignore',
  integrations: [
    sitemap(),
    UnoCSS({ injectReset: true }),
    robotsTxt(),
  ],

  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
    server: {
      fs: {
        allow: ['public/.well-known/nostr.json'],
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  },
});
