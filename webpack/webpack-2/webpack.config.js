const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {

  // for sass and css combined in single file dist/main.css
  entry: './src/index.js',
  
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },


  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      // {
      //   test: /\.svg$/,
      //   use: 'file-loader'
      // },
      // {
      //   test: /\.png$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         mimetype: 'image/png'
      //       }
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    /* new CopyPlugin({
      patterns: [{ from: 'src/index.html' }],
    }), */
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin()
  ]
};

module.exports = config;