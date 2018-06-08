let path = require('path');
let webpack = require('webpack');

let config = {
  mode: 'development',
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
  }
};

let serverConfig = {
  target: 'node',
  entry: {
    app: './app/hypernova.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'hypernova-server.js'
  }
  //…
};

let clientConfig = {
  target: 'web',
  entry: {
    app: './app/client.js'
  },
  output: {
    path: path.resolve(__dirname, '../php/assets'),
    filename: 'react-client.js'
  }
};

module.exports = [ 
  Object.assign({}, config, serverConfig), 
  Object.assign({}, config, clientConfig),  
];