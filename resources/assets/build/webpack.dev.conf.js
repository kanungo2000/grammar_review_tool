'use strict'

const config = require('./config')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const baseWebpackConfig = require('./webpack.base.conf')
const utils = require('./utils')

Object.keys(baseWebpackConfig.entry).forEach(name => {
  baseWebpackConfig.entry[name] = ['./resources/assets/build/dev-client']
    .concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({sourceMap: config.development.cssSourceMap}),
  },
  devtool: '#inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './resources/assets/index.html',
      inject: true,
    }),
  ],
})
