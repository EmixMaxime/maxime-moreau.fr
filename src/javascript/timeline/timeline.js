require('home/_timeline.scss')
require('home/_presentation')
require('home/_skills.scss')
require('home/_contact.scss')
require('footer/_footer.scss')
require('animate.css') // TDODO: voir ce bug, j'ai dû déplacer les require ici...

import Visibility from '../visibility'

const timelines = document.querySelectorAll('.cd-timeline')
new Visibility(timelines)
