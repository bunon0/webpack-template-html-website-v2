module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: [],
  extends: [
    // "some-other-config-you-use",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    semi: ["error", "always"],
    "no-undef": "error",
    "no-var": "error",
  },
};
