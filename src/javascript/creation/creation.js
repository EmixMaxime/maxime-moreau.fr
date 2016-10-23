/* eslint-disable no-undef */
/* eslint-disable no-unexpected-multiline */
/* eslint-disable padded-blocks */
/* eslint-disable no-spaced-func */
require('home/_creations')
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!../libs/snap.svg-min.js'
// About this : https://github.com/adobe-webplatform/Snap.svg/issues/341
import Animate from './animate'

const targets = document.querySelectorAll('.grid > div')
const animate = new Animate(350, mina.backout)
const projectContent = document.querySelector('.cd-project-content')

targets.forEach(el => {
    const snap = Snap(el.querySelector('svg'))
    animate.anime(el, snap)

    const button = el.querySelector('button')
    button.addEventListener('click', function () {
        const ref = this.parentElement.parentElement.parentElement.getAttribute('data-ref')
        /* 1èrement : je met en display block la bonne section à afficher */
        const section = projectContent.querySelector('section[data-project="' + ref + '"]')
        section.classList.add('display-block')

        /* 2e : je fais afficher le .cd-project-content */
        projectContent.classList.add('show', 'enter')
        projectContent.addEventListener('transitionend', function () {
            if (!this.classList.contains('show')) {
                section.classList.remove('display-block')
            }
        })

        const close = section.querySelector('.close')
        close.addEventListener('click', function () {
            projectContent.classList.remove('show', 'enter')
            projectContent.classList.add('leave')
        })
    })
})
