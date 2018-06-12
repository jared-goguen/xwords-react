let path = require('path');
let webpack = require('webpack');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  target: 'web',
  mode: 'development',
  entry: {
    app: './app.js'
  },
  output: {
    path: path.resolve(__dirname, '../server'),
    filename: 'js/webpack.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/webpack.css',
      chunkFilename: 'css/[id].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { 
          loader: 'babel-loader',
        }
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
            MiniCssExtractPlugin.loader, 
            'css-loader',
            'sass-loader'
        ]
      }
    ]
  }
};