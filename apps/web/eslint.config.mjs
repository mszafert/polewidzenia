import { config } from "@repo/eslint-config/base";
import astroParser from "astro-eslint-parser";
import astroPlugin from "eslint-plugin-astro";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...config,
  {
    files: ["**/*.astro"],
    plugins: {
      astro: astroPlugin,
    },
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
    rules: {
      ...astroPlugin.configs.recommended.rules,
    },
  },
];
