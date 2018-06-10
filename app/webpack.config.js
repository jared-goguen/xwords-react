let path = require('path');
let webpack = require('webpack');

module.exports = {
  target: 'web',
  entry: {
    app: './entry.js'
  },
  output: {
    path: path.resolve(__dirname, '../php/assets'),
    filename: 'react-client.js'
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules|vendor/,
        use: { 
          loader: 'babel-loader',
        }
      }
    ]
  }
};