import {HeaderResponsive} from './headerResponsive'
import {HeaderAnimate} from './headerAnimate'

require('_header.scss')

let optionsHeader = {
    iconSelector: '#header__icon',
    bodyClass: 'cliqued', // className add to body when the header is open
    hiddenSelector: '.site-cache' // The selector of the div for hide the website when the header is open
}

new HeaderResponsive(optionsHeader)
new HeaderAnimate('.header', '#fake', '.header__nav__link')
