var path = require('path');
var root = path.resolve(__dirname, '../')

var publicDirectory = 'public'

module.exports = {
    publicDirectory: 'public',
    entry: {
        app: ['./src/sass/_app.scss', './src/javascript/main.js']
    },
    output: {
        path: path.resolve(root, publicDirectory), // attention ce dossier sera vidé systématiquement (ne rien y mettre !)
        //filename: '[name]-[hash:7].js',
        // publicPath: ''
    },
    // Fichiers / dossiers à copier
    directories: [],
    files: [],
    port: 3002,
    // proxy: 'http://localhost:8000', // Pour PHP / Ruby ou autre
    base: './src',
    support: ['last 2 versions'], // Pour autoprefixer
    forceReload: ['./src/index.html'],
    extractsHtml: [
        { filename: 'index.html', template: './src/templates/home.pug' },
        // { filename: 'test.html', template: './src/html/test.pug' }
    ]
}
