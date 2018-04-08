
const path = require('path')

module.exports = {
  mode: 'development',
  context: path.join(__dirname, '/app/src'),
  entry: ['./main'],
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  }
}
