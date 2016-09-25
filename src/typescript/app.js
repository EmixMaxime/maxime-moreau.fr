export default class Emix {
    getScrollY (element) {
        return element.scrollTop ? element.scrollTop : window.scrollY // TODO: window.scrollY => use un polyfill
    }

    isMobile () {
        return window.innerWidth < 1200 // TODO: use un polyfill
    }
}