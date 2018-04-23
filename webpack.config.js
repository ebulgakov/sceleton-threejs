const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './app/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: ['node_modules', 'app/js'],
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: 'node_modules/three/build/three.js',
        to: 'libs',
        toType: 'dir',
      },
      {
        from: 'node_modules/tween.js/src/Tween.js',
        to: 'libs',
        toType: 'dir',
      },
      {
        from: 'node_modules/stats.js/build/stats.min.js',
        to: 'libs',
        toType: 'dir',
      },
      {
        from: 'node_modules/dat.gui/build/dat.gui.js',
        to: 'libs',
        toType: 'dir',
      },
    ]),
  ],
  devServer: {
    hot: true,
    contentBase: './dist',
  },
};
