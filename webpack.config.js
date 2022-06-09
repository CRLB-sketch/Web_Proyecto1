// ! Con mi propio webpack.config.js
export default {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    // publicPath: '/dist/'
  },
  devServer: {
    static: {
      directory: 'dist',
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      { test: [/\.jsx?$/], use: ['babel-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(png|jpg|gif|avif|jfif)$/, loader: 'url-loader' },
      { test: [/\.(svg|mp3)$/], use: ['file-loader'] },
    ],
  },
}
