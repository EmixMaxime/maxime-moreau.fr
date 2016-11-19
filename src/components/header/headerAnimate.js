import {Emix as App} from '../../javascript/app'
import Navigate from '../../javascript/Navigate'
const navigate = new Navigate()
const Emix = new App()

export class HeaderAnimate {

    constructor (headerElement, fakeElement, linksElements) {

        this.elements = { headerElement, fakeElement, linksElements }
        Object.freeze(this.elements)

        this.mobile = Emix.isMobile()
        this.headerTop = this._getHeaderTop()
        this._addEventOnResize()

        this._animateAnchor()
    }

    _getHeaderTop () {
        const { headerElement } = this.elements
        let headerTop

        if (!this.mobile) {
            headerTop = headerElement.getBoundingClientRect().top + window.scrollY // ClientRect envoit la position relative à l'écran, on ajoute donc la quantité de scrollY
        } else { // If the client is mobile, the header is "fixed" on top = 0 (position absolute top 0)
            headerTop = 0
        }

        return headerTop
    }

    _eventScroll () {
        const { headerElement } = this.elements
        const headerTop = this._getHeaderTop()

        return function () {

            const hasScrollClass = headerElement.classList.contains('animated-scroll')

            if (Emix.getScrollY(this) > headerTop && !hasScrollClass) {

                headerElement.classList.add('animated-scroll')

            } else if (Emix.getScrollY(this) <= headerTop && hasScrollClass) {

                headerElement.classList.remove('animated-scroll')
            }
        }
    }

    _addEventOnResize () {
        const onScroll = this._eventScroll()

        const events = () => {
            this.mobile = Emix.isMobile()

            if (this.mobile) {

                const scrollable = document.querySelector('.scroll-resp')
                scrollable.addEventListener('scroll', onScroll)

            } else {
                window.addEventListener('scroll', onScroll)
            }
        }
        window.addEventListener('resize', events)
        events()
    }

    _animateAnchor () {
        const { linksElements: links } = this.elements

        links.forEach(link => {
            link.addEventListener('click', function () {
                document.body.classList.remove('menu-opened')
                navigate.go(this.hash)
            })
        })
    }
}
