import {Emix as App} from '../app'
import Navigate from '../Navigate'
const navigate = new Navigate()
// console.log(Emix.isMobile())
const Emix = new App()

export class HeaderAnimate {

    constructor (headerSelector, fakeSelector, linkSelector) {
        this.header = document.querySelector(headerSelector)
        this.headerFake = document.querySelector(fakeSelector)
        this.links = document.querySelectorAll(linkSelector)

        if (!this.header) throw `[HEADER] L\'élement : "${headerSelector}" est introuvable dans le DOM`
        if (!this.headerFake) throw `[HEADER] L\'élement : "${fakeSelector}" est introuvable dans le DOM`

        this.mobile = Emix.isMobile()
        this.headerTop = this.getHeaderTop()
        this.addEventOnResize()

        this.animateAnchor()
    }

    getHeaderTop () {
        let headerTop
        if (!this.mobile) {
            headerTop = this.header.getBoundingClientRect().top + window.scrollY // ClientRect envoit la position relative à l'écran, on ajoute donc la quantité de scrollY
        } else { // If the client is mobile, the header is "fixed" on top = 0 (position absolute top 0)
            headerTop = 0
        }
        return headerTop
    }

    eventScroll () {
        let self = this
        return function () {
            let hasScrollClass = self.header.classList.contains('animated-scroll')
            if (Emix.getScrollY(this) > self.headerTop && !hasScrollClass) {
                self.header.classList.add('animated-scroll')
            } else if (Emix.getScrollY(this) <= self.headerTop && hasScrollClass) {
                self.header.classList.remove('animated-scroll')
            }
        }
    }

    addEventOnResize () {
        let onScroll = this.eventScroll()
        let events = () => {
            this.mobile = Emix.isMobile()
            if (this.mobile) {
                let scrollable = document.querySelector('.scroll-resp')
                scrollable.addEventListener('scroll', onScroll)
            } else {
                window.addEventListener('scroll', onScroll)
            }
        }
        window.addEventListener('resize', events)
        events()
    }

    animateAnchor () {
        this.links.forEach(link => {
            link.addEventListener('click', function () {
                navigate.go(this.hash)
            })
        })
    }
}
