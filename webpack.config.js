'use strict';

require('dotenv').config()
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './client/dist');
var APP_DIR = path.resolve(__dirname, './client/src');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'app.js',
  },
  module: {
    rules : [
      {
        test: /\.js?/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        include: APP_DIR,
        loader: [ 'style-loader', 'css-loader' ]
      }
    ]
  },

  devServer: {
    allowedHosts: ['localhost'],
    host: 'localhost',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    contentBase: BUILD_DIR,
  }
};

module.exports = config;
