module.exports = {
  plugins: ["stylelint-scss", "stylelint-selector-bem-pattern"],
  extends: ["stylelint-config-standard-scss", "stylelint-config-prettier"],
  ignoreFiles: ["node_modules/**/*.css", "dist/**/*.css"],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "plugin/selector-bem-pattern": {
      componentName: "[A-Z]+",
      componentSelectors: {
        initial: "^\\.{componentName}(?:-[a-z]+)?$",
        combined: "^\\.combined-{componentName}-[a-z]+$",
      },
      utilitySelectors: "^\\.util-[a-z]+$",
    },
  },
};
