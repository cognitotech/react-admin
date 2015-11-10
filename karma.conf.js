var path = require('path');
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['source-map-support', 'mocha', 'sinon'],
    files: [
      'src/tests.js',
    ],
    exclude: [],
    preprocessors: {
      'src/tests.js': ['webpack', 'sourcemap'],
    },
    reporters: ['mocha', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [/* 'Chrome', */'PhantomJS'],
    singleRun: false,
    webpack: require('./webpack/config.test'),
    webpackMiddleware: {
      noInfo: true,
    },
  });
};
