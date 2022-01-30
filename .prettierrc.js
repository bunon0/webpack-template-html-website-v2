module.exports = {
  printWidth: 80,
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  endOfLine: "lf",
  bracketSpacing: true,
  jsxBracketSameLine: true,
  bracketSpacing: true,
  arrowParens: avoid,

  overrides: [
    {
      files: ["*.html"],
      options: {
        tabWidth: 2,
      },
    },
  ],
};
