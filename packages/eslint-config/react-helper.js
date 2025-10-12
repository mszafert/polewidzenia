import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import globals from "globals";

/**
 * Shared React configuration helper
 * @param {object} options - Configuration options
 * @param {boolean} options.withServiceWorker - Include service worker globals
 * @param {boolean} options.withBrowser - Include browser globals
 * @returns {import("eslint").Linter.Config[]}
 */
export function createReactConfig(options = {}) {
  const { withServiceWorker = false, withBrowser = false } = options;

  const globalConfig = {};

  if (withServiceWorker) {
    Object.assign(globalConfig, globals.serviceworker);
  }

  if (withBrowser) {
    Object.assign(globalConfig, globals.browser);
  }

  return [
    {
      ...pluginReact.configs.flat.recommended,
      languageOptions: {
        ...pluginReact.configs.flat.recommended.languageOptions,
        globals: globalConfig,
      },
    },
    {
      plugins: {
        "react-hooks": pluginReactHooks,
      },
      settings: { react: { version: "detect" } },
      rules: {
        ...pluginReactHooks.configs.recommended.rules,
        // React scope no longer necessary with new JSX transform.
        "react/react-in-jsx-scope": "off",
      },
    },
  ];
}
