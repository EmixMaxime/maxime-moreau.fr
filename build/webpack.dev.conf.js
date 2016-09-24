var webpack = require('webpack')
var webpackConfig = require('./webpack.base.conf')
var config = require('./config')
var HtmlWebpackPlugin = require('html-webpack-plugin')


// add hot-reload related code to entry chunks
Object.keys(webpackConfig.entry).forEach(function (name) {
  webpackConfig.entry[name] = ['./build/dev-client'].concat(webpackConfig.entry[name])
})
webpackConfig.devtool = '#eval-source-map'
webpackConfig.devServer = { headers: { "Access-Control-Allow-Origin": "*" }}
if(config.proxy){
  webpackConfig.output.publicPath = "http://localhost:" + config.port + webpackConfig.output.publicPath
}
webpackConfig.plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
].concat(webpackConfig.plugins)

// On ajoute le HtmlWebppackPlugin pour extraire nos fichier HTML venant d'un fichier template (ici PUG)
var htmlPlugins = []

config.extractsHtml.forEach((extract) => {
  htmlPlugins.push(
    new HtmlWebpackPlugin(extract)
  )
})

module.exports = webpackConfig
