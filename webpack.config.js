const path = require('path')

const createConfig = libraryTarget => ({
  entry: './src/index.ts',
  devtool: process.env.DEV === 'true' ? 'inline-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    filename: process.env.DEV === 'true' ? `hls-dl.${libraryTarget}.dev.js` : `hls-dl.${libraryTarget}.js`,
    path: path.resolve(__dirname, 'dist'),
    library: 'hlsDl',
    libraryTarget: libraryTarget
  }
})

module.exports = [
  createConfig('var'),
  createConfig('commonjs2')
]
