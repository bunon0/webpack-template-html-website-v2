module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-prettier"],
  ignoreFiles: ["node_modules"],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
  },
  plugins: ["stylelint-scss"],
};
