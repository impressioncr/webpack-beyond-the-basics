const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = {
  entry: {
    main: [
      'webpack-hot-middleware/client?reload=true', 
      './src/index.js'
    ]
  },
  mode: 'development',
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
            loader: 'style-loader',
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
    // new BundleAnalyzerPlugin({
    //   generateStatsFile: true
    // })
  ]
}