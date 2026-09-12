const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    static: path.resolve(__dirname, './public'),
    // Compile warnings (e.g. Bootstrap's SCSS against a newer Dart Sass -
    // pre-existing, unrelated to any dependency bump) default to `true`
    // and trigger the same full-screen overlay as a real error, which
    // reads as "the app is broken" when it isn't. Keep the overlay for
    // actual errors only.
    client: {
      overlay: {
        errors: true,
        warnings: false,
        runtimeErrors: true
      }
    }
  },
  mode: 'development',
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      fix: true
    })    
  ]
});