//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let webpackConfig = require('./webpack.config');

webpackConfig.watch = true;
webpackConfig.mode = 'development';
webpackConfig.devtool = 'eval';
// Remove Bundle Analyzer, it will disable watch
//webpackConfig.plugins.pop();
module.exports = webpackConfig;