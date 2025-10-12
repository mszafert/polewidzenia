import { nextJsConfig } from "@repo/eslint-config/next-js";

export default [
  {
    ignores: [".next/**"],
  },
  ...nextJsConfig,
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
    },
  },
];
