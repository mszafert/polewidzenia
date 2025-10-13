import eslintPluginAstro from "eslint-plugin-astro";
import { baseConfig } from "./base.js";

/**
 * A custom ESLint configuration for Astro projects.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const astroConfig = [
  ...baseConfig,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
  {
    rules: {
      // Astro specific rules can be added here
      "astro/no-conflict-set-directives": "error",
      "astro/no-unused-define-vars-in-style": "error",
    },
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      globals: {
        // Add any Astro-specific globals here
      },
    },
  },
];
