const tpl = require('../templates/home.pug')
document.write(tpl()) // à retirer lorsqu'on build
require('./polyfill/forEach')
require('intersection-observer')

require('./header/header')
require('./citation/citation')
require('./timeline/timeline')
require('./creation/creation')
require('./form/form')
require('./skill/skill')
require('home/_hero.scss')
