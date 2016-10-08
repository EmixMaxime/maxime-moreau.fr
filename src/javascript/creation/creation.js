/* eslint-disable no-undef */
/* eslint-disable no-unexpected-multiline */
/* eslint-disable padded-blocks */
/* eslint-disable no-spaced-func */
require('home/_creations')
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!../libs/snap.svg-min.js'
// About this : https://github.com/adobe-webplatform/Snap.svg/issues/341

(function () {
	
	function init () {
		const speed = 350
		const easing = mina.backout

		document.querySelectorAll('#grid > a').forEach(el => {
			const s = Snap(el.querySelector('svg'))
			const path = s.select('path')
			const pathConfig = {
				from: path.attr('d'),
				to: el.getAttribute('data-path-hover')
			}

			el.addEventListener('mouseenter', () => {
				path.animate({'path': pathConfig.to}, speed, easing)
			})

			el.addEventListener('mouseleave', () => {
				path.animate({'path': pathConfig.from}, speed, easing)
			})
		})
	}

	init()
})()
