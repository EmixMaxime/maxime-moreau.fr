import Emix from '../app'
import scrollTo = require('scroll-to')

export default class HeaderAnimate {

    private header: Element
    private headerFake: Element
    private links
    private headerTop: number
    private mobile: boolean

    constructor (headerSelector: string, fakeSelector: string, linkSelector: string) {
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

    private getHeaderTop () : number {
        let headerTop: number
        if(!this.mobile) {
            headerTop = this.header.getBoundingClientRect().top + window.scrollY // ClientRect envoit la position relative à l'écran, on ajoute donc la quantité de scrollY
        } else { // If the client is mobile, the header is "fixed" on top = 0 (position absolute top 0)
            headerTop = 0
        }
        return headerTop
    }

    eventScroll () {
        let self = this
        return function () {
            let hasScrollClass: boolean = self.header.classList.contains('animated-scroll')
            if (Emix.getScrollY(this) > self.headerTop && !hasScrollClass) {
                if (!self.mobile) {
                    self.headerFake.classList.add('fake')
                    self.header.classList.add('desktop')
                }
                self.header.classList.add('animated-scroll')
            } else if (Emix.getScrollY(this) <= self.headerTop && hasScrollClass) {
                if (!self.mobile) {
                    self.headerFake.classList.remove('fake')
                    self.header.classList.remove('desktop')
                }
                self.header.classList.remove('animated-scroll')
            }
        }
    }

    addEventOnResize () : void {
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
        this.links.forEach((link) => {
            link.addEventListener('click', function () {
                let target = document.querySelector(this.hash)
                let y = target.getBoundingClientRect().top + window.scrollY
                scrollTo(0,y)
            })
        })
    }
}
