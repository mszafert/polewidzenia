// @ts-check
import node from '@astrojs/node';
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS()],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});
