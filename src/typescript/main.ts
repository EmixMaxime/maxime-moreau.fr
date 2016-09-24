// https://youtu.be/n6RoVyZEsv4?t=1675 <- système de "require"
import scrollEmix = require('scroll-to')
import Emix from './app'

import {HeaderResponsive,interfaceHeaderRespOptions} from './header/headerResponsive'
import HeaderAnimate from './header/headerAnimate'

import {AnimateForm, interfaceFormOptions} from './form/form'

/* declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
} */

declare function require(name:string)

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


let optionsHeader: interfaceHeaderRespOptions = {
    iconSelector: '#header__icon',
    bodyClass: 'cliqued', // className add to body when the header is open
    hiddenSelector: '.site-cache', // The selector of the div for hide the website when the header is open
}

new HeaderResponsive(optionsHeader)
new HeaderAnimate('.header', '#fake', '.header__nav__link')

/* Citation */
import {Citation, interfaceOptions} from './citation/citation'

const citations: interfaceOptions[] = [
    { author: 'Socrate', content: "Tout ce que je sais, c'est que je ne sais rien" },
    { author: 'bidule', content: "L'homme est un loup pour l'homme" }
]

let citation = new Citation(citations, '#citation', '.author')

/* Form */

const optionsA: interfaceFormOptions = {
    inputSelector: '.field-input',
    labeledClass: 'has-label',
    focusedClass: 'is-focused'
}

new AnimateForm(optionsA)
