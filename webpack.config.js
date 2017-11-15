const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: [ 'babel-polyfill', './src' ],
  target: 'node',
  output: {
    libraryTarget: "commonjs",
    filename: 'index.js'
  },
  externals: [ nodeExternals() ],
  module: {
    loaders: [{
      test: /^.+\.js$/,
      loader: 'babel-loader',
      options: {
        presets: [ 'env' ]
      }
    }]
  }
}
