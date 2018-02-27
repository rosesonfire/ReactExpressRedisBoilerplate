import ExtractTextPlugin from "extract-text-webpack-plugin";
import WebpackOnBuildPlugin from "on-build-webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import HtmlWebpackExcludeAssetsPlugin from "html-webpack-exclude-assets-plugin";
import { exec } from "child_process";
import { backEndConfig, frontEndConfig } from "./../../config";

const template = "./app/template.html";
const scripts = "./scripts/script.js";
const styles = "./styles/style.scss";
const app = "./index.js";
const imgPath = __dirname + "/img";
const outputPath = __dirname + "/public";

module.exports = {
  entry: {
    scripts: scripts,
    styles: styles,
    app: app
  },
  output: {
    path: outputPath,
    filename: "[name].min.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract([
          {
            loader: "css-loader",
            options: {
              minimize: true
            }
          },
          {
            loader: "sass-loader"
          }
        ])
      }
    ]
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("[name].min.css"),
    new HtmlWebpackPlugin({
      hash: true,
      template: template,
      excludeAssets: [/styles.*js/],
      // eslint-disable-next-line no-unused-vars
      chunksSortMode: (a, b) => {
        if (a.names[0] === "app") {
          return 1;
        }

        return -1;
      }
    }),
    new HtmlWebpackExcludeAssetsPlugin(),
    // eslint-disable-next-line no-unused-vars
    new WebpackOnBuildPlugin((stats) => {
      exec("rm -rf " + outputPath + "/styles.min.js");
    })
  ],
  devServer: {
    host: frontEndConfig.host,
    port: frontEndConfig.port,
    inline: true,
    open: true,
    proxy: {
      "/service" : `http://${backEndConfig.host}:${backEndConfig.port}`
    },
    contentBase: imgPath
  }
};