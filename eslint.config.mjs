import js from "@eslint/js";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import jsxA11yRecommended from "eslint-plugin-jsx-a11y/configs/recommended.js";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  reactRecommended,
  jsxA11yRecommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        React: "readonly",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  prettier,
];
