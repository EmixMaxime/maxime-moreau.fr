import {HeaderResponsive} from './headerResponsive'
import {HeaderAnimate} from './headerAnimate'

require('./_header.scss')
document.querySelector('.hero_content')
    .classList.add('animated', 'fadeIn')

let optionsHeader = {
    iconSelector: '#header__icon',
    bodyClass: 'cliqued', // className add to body when the header is open
    hiddenSelector: '.site-cache' // The selector of the div for hide the website when the header is open
}

const headerIcon = document.querySelector(optionsHeader.iconSelector)
const hidden = document.querySelector(optionsHeader.hiddenSelector)

new HeaderResponsive(headerIcon, hidden, optionsHeader)

const header = document.querySelector('#header')
const headerFake = document.querySelector('#fake')
const links = header.querySelectorAll('.header__nav__link')

new HeaderAnimate(header, headerFake, links)
