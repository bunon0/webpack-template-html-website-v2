module.exports = {
  plugins: [
    require("postcss-combine-duplicated-selectors"),
    require("css-mqpacker"),
    require("css-declaration-sorter")({
      order: "smacss", // alphabetical, smacss, concentric-css
    }),
    require("autoprefixer")({
      grid: "autoplace",
    }),
  ],
};
