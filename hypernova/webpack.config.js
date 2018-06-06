var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: './app/bindings.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { 
          loader: 'babel-loader',
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  target: 'node'
};