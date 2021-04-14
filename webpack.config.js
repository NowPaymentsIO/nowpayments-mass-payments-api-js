const path = require('path')

const config = {}

function generateConfig(name) {
  const compress = name.indexOf('min') > -1
  const config = {
    target: 'node',
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: name + '.js',
      library: 'NOWPaymentsMPApiJS',
      libraryTarget: 'umd',
      globalObject: 'this',
      umdNamedDefine: true
    },
    resolve: {
      extensions: ['.js', '.ts']
    },
    devtool: 'source-map',
    mode: compress ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    }
  }
  return config
}

['nowpayments-mass-payments-api-js', 'nowpayments-mass-payments-api-js.min'].forEach(function (key) {
  config[key] = generateConfig(key)
})

module.exports = config
