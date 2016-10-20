require('home/_timeline.scss')
require('home/_presentation')
require('home/_skills.scss')
require('home/_contact.scss')
require('footer/_footer.scss')
require('animate.css')
import Timeline from './timelineAnimate'

new Timeline(document.querySelectorAll('.cd-timeline'), '.hidden').animate()
