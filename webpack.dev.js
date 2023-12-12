const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const name = require('./package.json').name;
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: { 
    hot: true,
    static: path.resolve(__dirname, './public')
  },
  mode: 'development',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/' + name + '.min.css?' + Date.now() 
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      fix: true
    })    
  ]
});