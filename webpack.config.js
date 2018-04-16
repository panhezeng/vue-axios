var path = require('path')

module.exports = {
  mode: 'production',
//  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
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
