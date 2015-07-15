module.exports = function() {
    var client = './src/client/',
        clientApp = client + 'app/';

    var config = {
        client: client,

        index: client + 'index.html',

        css: [
            client + 'styles/css/*.css'
        ],

        js: [
            clientApp + '**/*.js',
            // '!' + clientApp + 'core'
        ],

        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        }
    };

    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };

        return options;
    };

    return config;
};
