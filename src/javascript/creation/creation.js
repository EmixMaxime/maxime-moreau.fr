/* eslint-disable no-undef */
/* eslint-disable no-unexpected-multiline */
/* eslint-disable padded-blocks */
/* eslint-disable no-spaced-func */
require('home/_creations')
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!../libs/snap.svg-min.js' // About this : https://github.com/adobe-webplatform/Snap.svg/issues/341
import Animate from './animate'
// import Navigate from '../Navigate'
import {EnterAndLeaveMouvement} from '../Animations'
import DynamicSections from '../DynamicSections'

const targets = document.querySelectorAll('.grid > div')
const animate = new Animate(350, mina.backout)

targets.forEach(el => {
    const snap = Snap(el.querySelector('svg'))
    animate.anime(el, snap)
})

const targetBlock = document.querySelector('.cd-project-content')
const emitterBlock = document.querySelector('#emitter')

const Animation = new EnterAndLeaveMouvement({container: targetBlock}) // TODO: passer states ;)

new DynamicSections({emitterBlock, targetBlock, Animation})
