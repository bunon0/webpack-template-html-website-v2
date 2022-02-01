module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: [],
  extends: ["prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-undef": "error",
    "no-var": "error",
  },
};
