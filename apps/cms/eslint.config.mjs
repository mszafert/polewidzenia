import nextPlugin from "@next/eslint-plugin-next";
import { config } from "@repo/eslint-config/base";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: [".next/**"],
  },
  ...config,
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "@next/next/no-html-link-for-pages": "off",
    },
  },
];