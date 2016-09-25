import {HeaderResponsive} from './header/headerResponsive'
import {HeaderAnimate} from './header/headerAnimate'

import {AnimateForm} from './form/form'

const tpl = require('../templates/home.pug')
let locals = { 
    site: { prefixTitle: 'Maxime -', name: 'Maxime' },
    social: { 
        twitter: 'https://twitter.com/EmixDev',
        github: 'https://github.com/emixmaxime'
    },
    titles: [ { page: 'home', content: 'Personnal website' } ],
    menu: [
        { link: 'home', name: 'Accueil' },
        { link: 'presentation', name: 'Présentation' },
        { link: 'skills', name: 'Compétences' },
        { link: 'contact', name: 'Contact' }
    ],
    skills: [
        { name: 'html', img: 'html.png', percent: 'seventy' },
        { name: 'Javascript', img: 'js.png', class: 'js', percent: 'forty' },
        { name: 'php', img: 'php.png', percent: 'ninety' },
        { name: 'laravel', img: 'laravel.png', percent: 'eighty', style: 'margin-top: 10px' }
    ]
}

const html = tpl(locals)
document.write(html)

let optionsHeader = {
    iconSelector: '#header__icon',
    bodyClass: 'cliqued', // className add to body when the header is open
    hiddenSelector: '.site-cache' // The selector of the div for hide the website when the header is open
}

new HeaderResponsive(optionsHeader)
new HeaderAnimate('.header', '#fake', '.header__nav__link')
/* Citation */
import {Citation} from './citation/citation'

const citations = [
    { author: 'Socrate', content: "Tout ce que je sais, c'est que je ne sais rien" },
    { author: 'bidule', content: "L'homme est un loup pour l'homme" }
]

new Citation(citations, '#citation', '.author')

/* Form */

const optionsA = {
    inputSelector: '.field-input',
    labeledClass: 'has-label',
    focusedClass: 'is-focused'
}

new AnimateForm(optionsA)

import Timeline from './timeline'

new Timeline(document.querySelectorAll('.cd-timeline'), '.hidden').animate()
