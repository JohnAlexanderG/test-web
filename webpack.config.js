const { resolve } = require("path");
const { SourceMapDevToolPlugin } = require('webpack');

module.exports = {
  entry: {
    index: './src/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        firebaseApp: {
          test: /[\\/]node_modules[\\/]@firebase[\\/]app/,
          filename: './js/firebase-app-min.js',
          chunks: "all",
          enforce: true,
        },
        firebaseAuth: {
          test: /[\\/]node_modules[\\/]@firebase[\\/]auth/,
          filename: './js/firebase-auth-min.js',
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  devtool: false,
  plugins: [new SourceMapDevToolPlugin({
    filename: './js/[name].js.map',
    // exclude: ['vendor.js'],
  })],
  output: {
    filename: './js/[name].js',
    path: resolve(__dirname, 'build')
  }
};
