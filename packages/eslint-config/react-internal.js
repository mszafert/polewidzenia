import { config as baseConfig } from "./base.js";
import { createReactConfig } from "./react-helper.js";

/**
 * A custom ESLint configuration for libraries that use React.
 *
 * @type {import("eslint").Linter.Config[]} */
export const config = [
  ...baseConfig,
  ...createReactConfig({ withServiceWorker: true, withBrowser: true }),
];
