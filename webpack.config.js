module.exports = {
  output: {
    filename: 'vue-axios.min.js',
    libraryTarget: 'umd',
    globalObject: 'this',
    library: 'VueAxios',
    umdNamedDefine: true
  },
  externals: {
    'vue': 'Vue',
    'axios': 'axios'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}
