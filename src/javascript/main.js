const tpl = require('../templates/home.pug')
document.write(tpl()) // à retirer lorsqu'on build

require('./header/header.js')
require('./timeline/timeline.js')
require('./creation/creation.js')
require('./form/form.js')

require('home/_skills.scss')
require('home/_presentation.scss')
require('home/_contact.scss')
require('footer/_footer.scss')
