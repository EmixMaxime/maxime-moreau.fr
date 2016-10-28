export class HeaderResponsive {

    constructor (trigger, hiddenElement = null, options = {}) {

        const defaults = {
            iconSelector: '#header__icon',
            bodyClass: 'cliqued' // className add to body when the header is open
        }

        this.settings = Object.assign({}, defaults, options)
        Object.freeze(this.settings)

        this.elements = {trigger, hiddenElement}
        Object.freeze(this.elements)

        this._run()
    }

    _run () {
        const { trigger, hiddenElement } = this.elements
        const { bodyClass } = this.settings

        const toggleActive = (e) => {
            e.preventDefault()
            document.body.classList.toggle(bodyClass)
        }

        trigger.addEventListener('click', toggleActive)
        if (hiddenElement) hiddenElement.addEventListener('click', toggleActive)
    }
}
