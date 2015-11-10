var config = require('./config');
var path = require('path');

delete config.context;
delete config.entry;
delete config.output;
delete config.devServer;

//config.module.preLoaders = [
//  { test: /\.jsx?$/, loader: 'isparta', include: path.join(__dirname, 'src') }
//];

config.module.postLoaders = [
  { //delays coverage til after tests are run, fixing transpiled source coverage error
    test: /\.jsx?$/,
    exclude: /(test|node_modules|bower_components)\//,
    loader: 'istanbul-instrumenter'
  }
];

config.plugins.push('karma-chai');
config.plugins.push('karma-mocha');
config.plugins.push('karma-sourcemap-loader');
config.plugins.push('karma-webpack');
config.plugins.push('karma-coverage');
config.plugins.push('karma-mocha-reporter');

module.exports = config;
