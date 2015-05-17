module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['ng-scenario'],
        files: ['lib/*.js','e2e/*.js'],
        exclude: [],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        captureTimeout: 60000,
        singleRun: false,
        proxies:{
        	'/':'http://localhost:9000/'
        }
    });
};