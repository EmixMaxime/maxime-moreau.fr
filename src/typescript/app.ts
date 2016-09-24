export default class Emix {
    static getScrollY (element) : number {
        return element.scrollTop ? element.scrollTop : window.scrollY // TODO: window.scrollY => use un polyfill
    }

    static isMobile () : boolean {
        return window.innerWidth < 1200 // TODO: use un polyfill
    }
}