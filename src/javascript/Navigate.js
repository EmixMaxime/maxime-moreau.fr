const scrollTo = require('scroll-to')

export default class Navigate {

    constructor () {
        // const headerFake = document.querySelector('#fake')
        // this.headerFakeHeight = headerFake.clientHeight // TODO: voir pourquoi headerfake.clientHeight = 0 ...
        this.headerFakeHeight = 70
    }

    go (toAnchor) {
        const target = document.querySelector(toAnchor)
        const y = target.getBoundingClientRect().top + window.scrollY - this.headerFakeHeight
        scrollTo(0, y)
    }

}
