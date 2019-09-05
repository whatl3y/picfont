const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: [
    'core-js/stable',
    'regenerator-runtime/runtime',
    './src'
  ],
  target: 'node',
  output: {
    libraryTarget: "commonjs",
    filename: 'index.js'
  },
  externals: [ nodeExternals() ],
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}
