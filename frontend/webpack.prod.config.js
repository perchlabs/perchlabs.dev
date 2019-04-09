const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'production',

  output: {
    path: path.resolve(__dirname, 'public/r'),
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'src')],
      },
    ],
  },

  resolve: {
    modules: [
      path.resolve(__dirname, "src", "modules"),
      "node_modules",
    ],
    extensions: [
      '*',
      '.js',
      '.vue',
      '.json',
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
  ],
}