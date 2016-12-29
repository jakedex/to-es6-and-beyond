const path = require('path')
const webpack = require('webpack')

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: [
    'whatwg-fetch',
    'babel-polyfill',
    './src/main',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  },
  output: {
    publicPath: '/',
    filename: 'bundle.js'
  },
  debug,
  devtool: debug ? 'source-map' : null,
  devServer: {
    // contentBase: './src'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ]
}
