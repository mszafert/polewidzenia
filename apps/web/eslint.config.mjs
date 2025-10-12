import unocss from '@unocss/eslint-plugin';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import astro from 'eslint-plugin-astro';

export default [
  ...astro.configs.recommended,
  {
    plugins: {
      '@unocss': unocss,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      '@unocss/order': 'warn',
      '@unocss/order-attributify': 'warn',
    },
  },
];
