const tpl = require('../templates/home.pug')
document.write(tpl()) // à retirer lorsqu'on build
require('./header/header.js')
require('./timeline/timeline.js')
require('./creation/creation.js')
require('./form/form.js')
require('./skill/skill')

// require('home/_presentation')
// require('home/_skills.scss')
// require('home/_contact.scss')
// require('footer/_footer.scss')
// require('animate.css')

// const observer = new IntersectionObserver(observables => { // eslint-disable-line
//     observables.forEach(observable => {
//         if (observable.intersectionRatio > 0.5) {
//             observable.target.classList.add('fadeIn')

//             observer.unobserve(observable.target)
//         }
//     })
// }, {
//     threshold: [0.5]
// })

// const skillsContent = document.querySelector('#skills > .animated')
// console.log(skillsContent)
// observer.observe(skillsContent)
