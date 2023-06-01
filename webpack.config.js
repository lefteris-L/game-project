const path = require('path')
module.exports = {
  mode : 'none',
  entry: './src/script.js',
  output: {
    path: path.resolve('/dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    open: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
    ]
  }
}