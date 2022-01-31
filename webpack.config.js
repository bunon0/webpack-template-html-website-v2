const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: `./src/js/index.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: "js/main.js",
  },
  mode: "development",

  devServer: {
    static: "dist",
    open: true,
    // watchFiles: ["src/templates/**/*"],
  },

  //パッケージのライセンス情報をjsファイルの中に含める
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     {
      //       loader: "css-loader",
      //       options: {
      //         url: false,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, "src/scss/"),
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          { loader: "postcss-loader" },
          { loader: "sass-loader" },
          { loader: "glob-import-loader" },
        ],
      },
    ],
  },

  target: ["web", "es5"],

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!**.html"],
    }),
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
  ],
};
