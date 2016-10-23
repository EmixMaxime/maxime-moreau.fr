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
// const projectContent = document.querySelector('.cd-project-content')

targets.forEach(el => {
    const snap = Snap(el.querySelector('svg'))
    animate.anime(el, snap)
})

class Creation {

    constructor (emitterBlock, targetBlock, Animation) {
        this.emitterBlock = emitterBlock
        this.targetBlock = targetBlock
        this.Animation = Animation
        this.openTarget = null
    }

    openable () {
        const self = this
        const emitters = this.emitterBlock.querySelectorAll('button[data-target]')
        console.log(emitters)
        emitters.forEach(emiter => {
            emiter.addEventListener('click', function () {
                const refTarget = this.getAttribute('data-target') /* Je récupère la référence de la target */
                /* Je met la ref target en display block, puis je l'anime avec EnterAndLeaveMouvement (class) */
                const target = self.targetBlock.querySelector('section[data-ref="' + refTarget + '"')
                self.openTarget = target
                target.classList.add('display-block')
                self.closable(target)
                self.Animation.enterScreen()
            })
        })
    }

    closable (target) {
        const close = target.querySelector('.close')
        close.addEventListener('click', () => {
            this.Animation.leaveScreen()
        })

        this.targetBlock.addEventListener('notVisible', () => {
            this.openTarget.classList.remove('display-block')
            this.targetBlock.classList.remove('leave')
        })
    }
}

class EnterAndLeaveMouvement {

    constructor (container, visibleCLass, classEnter, classLeave) {
        this.container = container
        this.visibleClass = visibleCLass
        this.classEnter = classEnter
        this.classLeave = classLeave
        this.transitionEndEmitter()
    }

    enterScreen () {
        this.container.classList.add(this.visibleClass, this.classEnter)
    }

    transitionEndEmitter () {
        const self = this
        const eventVisible = new Event('visible')
        const eventNotVisible = new Event('notVisible')
        this.container.addEventListener('transitionend', function () {
            if (this.classList.contains(self.visibleClass)) {
                return self.container.dispatchEvent(eventVisible)
            }
            return self.container.dispatchEvent(eventNotVisible)
        })
    }

    leaveScreen () {
        this.container.classList.remove(this.visibleClass, this.classEnter)
        this.container.classList.add(this.classLeave)
    }
}

const targetBlock = document.querySelector('.cd-project-content')
const emitterBlock = document.querySelector('#emitter')

const Animation = new EnterAndLeaveMouvement(targetBlock, 'show', 'enter', 'leave')
const Emix = new Creation(emitterBlock, targetBlock, Animation)
Emix.openable()
