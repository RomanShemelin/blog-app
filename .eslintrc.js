module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "plugin:react/jsx-runtime",
    "plugin:i18next/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "i18next", "react-hooks"],
  rules: {
    "react/jsx-indent": [2, 4],
    "react/function-component-definition": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/strict-boolean-expressions": "warn",
    "@typescript-eslint/naming-convention": "warn",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "i18next/no-literal-string": [
      "error",
      { markupOnly: true, ignoreAttribute: ["data-testid", "to"] },
    ],
    "max-len": ["error", { ignoreComments: true }, { code: 100 }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error"
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ["**/src/**/*.test.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
      },
    },
  ],
  ignorePatterns: ["config/*", "webpack.config.ts"],
};
