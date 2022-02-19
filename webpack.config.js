const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const globule = require("globule");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const app = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/main.js",
  },

  devServer: {
    static: "dist",
    open: true,
    watchFiles: ["src/templates/**/*"],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src/js/"),
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
        include: path.resolve(__dirname, "./src/scss/"),
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
          { loader: "glob-import-loader" },
        ],
      },
    ],
  },

  target: ["web", "es5"],

  plugins: [
    new CleanWebpackPlugin({}),
    // new HtmlWebpackPlugin({
    //   template: "./src/templates/index.html",
    //   inject: false,
    //   minify: false,
    // }),
    new MiniCssExtractPlugin({
      filename: "./css/styles.css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: `${path.resolve(__dirname, "src")}/images/`,
          to: `${path.resolve(__dirname, "dist")}/images/`,
        },
        {
          from: `${path.resolve(__dirname, "src")}/public/`,
          to: `${path.resolve(__dirname, "dist")}/`,
        },
      ],
    }),
    // new ImageMinimizerPlugin({
    //   test: /\.(png|jpe?g)$/i,
    //   minimizer: {
    //     filename: "[path][name][ext].webp",
    //     implementation: ImageMinimizerPlugin.squooshMinify,
    //     options: {
    //       encodeOptions: {
    //         webp: {
    //           lossless: 1,
    //         },
    //       },
    //     },
    //   },
    // }),
    new ImageMinimizerPlugin({
      test: /\.(png|jpe?g)$/i,
      minimizer: {
        implementation: ImageMinimizerPlugin.squooshMinify,
        options: {
          encodeOptions: {
            mozjpeg: {
              quality: 85,
            },
            oxipng: {
              level: 3,
              interlace: false,
            },
          },
        },
      },
    }),
  ],

  //パッケージのライセンス情報をjsファイルの中に含める
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],
  },

  watchOptions: {
    ignored: /node_modules/,
  },
};

// htmlファイルを見つけて配列化
const templates = globule.find("./src/templates/**/*.html");

//htmlファイルごとにループさせる
templates.forEach(template => {
  const fileName = template.replace("./src/templates/", "");
  app.plugins.push(
    new HtmlWebpackPlugin({
      filename: `${fileName}`,
      template: template,
      inject: false, //false, head, body, trueから選べる
      minify: false, //本番環境でも圧縮しない
    })
  );
});
module.exports = app;
