import { astroConfig } from '@repo/eslint-config/astro';
import unocss from '@unocss/eslint-plugin';

export default [
  ...astroConfig,
  {
    plugins: {
      '@unocss': unocss,
    },
    rules: {
      '@unocss/order': 'warn',
      '@unocss/order-attributify': 'warn',
    },
  },
];
