const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const alias = require('./src/config/alias');

const ENV = process.env.NODE_ENV;

const ROOT_DIR = path.resolve(__dirname, './') 
const ENTRY_PATH = path.join(ROOT_DIR, './src/main.ts');

const bundler = {
  entry: ENTRY_PATH,
  output: {
    path: path.join(ROOT_DIR, './build'),
    publicPath: 'build',
    filename: 'app.js'
  },
  optimization: {
    minimize: ENV === 'production'
  },
  mode: ENV,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
          test: /\.scss$/i,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: ENV === 'development',
                    },
                },
                'css-loader',
                'sass-loader',
            ],
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(ROOT_DIR, 'build'),
    compress: true,
    port: 3000
  },
  stats: 'errors-warnings',
  watch: ENV === 'development',
  devtool: ENV === 'development' ? '#source-map' : false,
  plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
          template: 'src/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      })   
  ]
};

Object.keys(alias).forEach((key) => {
    bundler.resolve.alias[key] = path.resolve(__dirname, alias[key]) 
});

module.exports = bundler;