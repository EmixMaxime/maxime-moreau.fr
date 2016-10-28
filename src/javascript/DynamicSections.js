/* eslint-disable no-undef */
/* eslint-disable no-unused-vars  */
export default class DynamicSections {

    constructor (options = { emitterBlock, targetBlock, Animation, targetVisibleClass }) {

        const defaults = {
            targetVisibleClass: 'visible'
        }
        
        this.settings = Object.assign({}, options, defaults)
        Object.freeze(this.settings)

        this.openSection = null

        this._build()
        this._openable()
        this._closable()

    }

    _build () {
        const { emitterBlock, targetBlock } = this.settings

        let builder = new Map()
        const sectionsEmitter = emitterBlock.querySelectorAll('section[data-target-ref]')

        sectionsEmitter.forEach(sectionEmitter => {
            const button = sectionEmitter.querySelector('button')
            const targetRef = sectionEmitter.getAttribute('data-target-ref')

            const target = targetBlock.querySelector(`section[data-ref=${targetRef}`)
            builder.set(button, target)
        })

        this.structure = builder
    }

    _getTargetFromButton (buttonElement) {
        return this.structure.get(buttonElement)
    }

    _showSection (sectionTarget = null) {
        const { targetVisibleClass, Animation } = this.settings

        if (sectionTarget === null) {
            sectionTarget = this._getTargetFromButton(this)
        }

        this.openSection = sectionTarget

        sectionTarget.classList.add(targetVisibleClass)
        Animation.enterScreen()
    }

    _openable () {
        const structure = this.structure
        const self = this

        for (let [button, section] of structure) { // TODO: forEach? It's possible to get key/value?
            button.addEventListener('click', function () {
                self._showSection(section)
            })
        }
    }

    _closable () {
        const { Animation, targetBlock, targetVisibleClass } = this.settings
        const close = targetBlock.querySelector('.close')

        close.addEventListener('click', () => {
            Animation.leaveScreen()
                .then(() => {
                    this.openSection.classList.remove(targetVisibleClass)
            })
        })
    }
}
