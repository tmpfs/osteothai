const path = require('path')

module.exports = {
  mode: 'production',
  entry: __dirname + '/src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'build', 'assets', 'js')
  },
  devServer: {
    publicPath: '/assets/js',
    contentBase: __dirname + '/build'
  }
}
