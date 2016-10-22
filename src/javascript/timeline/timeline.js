require('home/_timeline.scss')
require('home/_presentation')
require('home/_skills.scss')
require('home/_contact.scss')
require('footer/_footer.scss')
require('animate.css')
import Visibility from '../visibility'

const timelines = document.querySelectorAll('.cd-timeline')
new Visibility(timelines, 'hidden', 0.5).animate()
