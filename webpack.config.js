module.exports = {
  output: {
    filename: 'vue-axios.min.js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    library: 'VueAxios',
    libraryExport: 'VueAxios'
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
