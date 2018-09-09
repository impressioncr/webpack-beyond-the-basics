const path = require('path')
const webpack = require('webpack')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")
const BrotliPlugin = require("brotli-webpack-plugin")

module.exports = {
  entry: {
    main: [
      './src/index.js'
    ]
  },
  mode: 'production',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devServer: {
    port: 3000,
    contentBase: 'dist',
    overlay: true,
    hot: true,
    stats: {
      colors: true
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(jpg|gif|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new OptimizeCssAssetsPlugin(),
    new MiniCSSExtractPlugin({
      filename: "[name]-[contenthash].css"
    }),
    new webpack.DefinePlugin({
      "process.env": {
      NODE_ENV: JSON.stringify("production")
      }
    }),
    new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
    new UglifyJSPlugin(),
    new CompressionPlugin({
      algorithm: "gzip"
    }),
    new BrotliPlugin()
  ]
}