const path = require('path')

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src', 'index.js'),
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  }
}
