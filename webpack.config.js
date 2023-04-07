const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CompressionPlugin = require("compression-webpack-plugin");

const fs = require("fs");
try {
  fs.mkdirSync("./dist");
} catch (error) { }
fs.copyFileSync("./src/_redirects", "./dist/_redirects");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "https://component-microservice.netlify.app/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8084,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "components",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./Testimonials1": "./src/components/Testimonials1/index.jsx",
        "./Advertorial": "./src/components/Advertorial/index.jsx",
        "./GlobalCss": "./src/styles/globalCss.scss",
        "./useRingba": "./src/hooks/useRingba.js",
        "./useEventId": "./src/hooks/useEventID.js",
        "./useGeneratorQuery": "./src/hooks/useGeneratorQuery.js",
        "./useVisitorId": "./src/hooks/useVisitorId.js",
        "./ringbaStorageKeys": "./src/config/ringbaStorageKeys.js",
        "./storageKeys": "./src/config/sessionStorageKeys.js",
        "./queryStrings": "./src/config/queryStrings.js",
        "./landerToQuizCookie": "./src/config/landerToQuizCookie.js",
        "./apis": "./src/config/apis.js",
        "./shortCodeReplacer": "./src/features/shortCodeReplacer.js"
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new CompressionPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
