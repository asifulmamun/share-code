const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// Check if webpack is running in production mode
const isProduction = process.env.NODE_ENV === 'production';

const entry = {
  app: './src/js/app.js',
  // index: './src/js/index.js',
}

const optimization = {
  minimize: isProduction, // if true/false
  minimizer: [
    // For JavaScript
    new TerserPlugin({
      test: /\.js(\?.*)?$/i,
      extractComments: false,
    }),
    // For CSS
    new CssMinimizerPlugin(),
  ],
};

const config = {
  
  mode: isProduction ? 'production' : 'development', // Set mode based on environment

  entry: entry,

  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'app.js'
    filename: 'js/[name].js'
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
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            },
          },
          'postcss-loader',
          'sass-loader',

        ]
      }
    ]
  },
  
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ],

  optimization: optimization,

};

module.exports = config;