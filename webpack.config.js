const path = require('path')

module.exports = {
  output: {
    filename: 'vue-axios.min.js',
    libraryTarget: 'umd',
    globalObject: 'this',
    library: 'VueAxios',
    umdNamedDefine: true,
  },
  externals: {
    'axios': {
      commonjs: 'axios',
      commonjs2: 'axios',
      amd: 'axios',
      root: 'axios',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
}
