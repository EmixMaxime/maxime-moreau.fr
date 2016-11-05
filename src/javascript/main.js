const tpl = require('../templates/home.pug')
document.write(tpl()) // à retirer lorsqu'on build
require('./polyfill/forEach')
require('intersection-observer')

require('../components/header/header.js')
require('../components/timeline/timeline.js')
require('../components/creation/creation.js')
require('../components/skill/skill.js')
require('../components/form/form.js')

require('_hero.scss')
require('_presentation')
require('_footer.scss')
require('animate.css') // TDODO: voir ce bug, j'ai dû déplacer les require ici...

