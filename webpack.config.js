const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const fs = require("fs");
try {
  fs.mkdirSync("./dist");
} catch (error) { }
fs.copyFileSync("./src/_redirects", "./dist/_redirects");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    // publicPath: "http://localhost:8084/",
    publicPath: "https://component-microservice.netlify.app",
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
        "./prelander/header/v1": "./src/components/PreLander/Headers/v1/index.jsx",
        "./prelander/footer/v1": "./src/components/PreLander/Footers/v1/index.jsx",
        "./Header1": "./src/components/Header1/index.jsx",
        "./Testimonials1": "./src/components/Testimonials1/index.jsx",
        "./Footer1": "./src/components/Footer1/index.jsx",
        "./GlobalCss": "./src/styles/globalCss.scss"
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
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
