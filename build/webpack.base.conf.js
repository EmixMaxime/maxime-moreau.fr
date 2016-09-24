var path = require('path')
var root = path.resolve(__dirname, '../')
var autoprefixer = require('autoprefixer')
var conf = require('./config')
var yaml = require('js-yaml')
var fs = require('fs')

var dataYml = yaml.safeLoad(fs.readFileSync('./src/templates/data.yml', 'utf8'))

module.exports = {
  entry: conf.entry,
  output: conf.output,
  resolve: {
    extensions: ['', '.js', '.vue', '.coffee', '.css', '.scss', '.ts', '.pug'],
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss'],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: root,
        exclude: /node_modules|libs/
      },
      {
        test: /\.ts$/,
        loader: 'ts',
        include: root,
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name]-[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [],
  eslint: {
    configFile: path.resolve(root, './.eslintrc'),
    formatter: require('eslint-friendly-formatter')
  },
  postcss: function () {
      return [autoprefixer({browsers: conf.support})];
  },
  pug: {
    pretty: true,
    locals: yaml.safeLoad(fs.readFileSync('./src/templates/data.yml', 'utf8'))
  }
}
