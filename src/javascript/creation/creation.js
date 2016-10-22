/* eslint-disable no-undef */
/* eslint-disable no-unexpected-multiline */
/* eslint-disable padded-blocks */
/* eslint-disable no-spaced-func */
require('home/_creations')
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!../libs/snap.svg-min.js'
// About this : https://github.com/adobe-webplatform/Snap.svg/issues/341

class Animate {

    constructor (speed, easing) {
        this.speed = speed
        this.easing = easing
    }

    anime (element, snap) {
        const path = snap.select('path')
        const pathConfig = {
            from: path.attr('d'),
            to: element.getAttribute('data-path-hover')
        }

        element.addEventListener('mouseenter', () => {
            path.animate({'path': pathConfig.to}, this.speed, this.easing)
        })

        element.addEventListener('mouseleave', () => {
            path.animate({'path': pathConfig.from}, this.speed, this.easing)
        })
    }
}
const targets = document.querySelectorAll('#grid > div')
const animate = new Animate(350, mina.backout)

targets.forEach(el => {
    const snap = Snap(el.querySelector('svg'))
    animate.anime(el, snap)
})

