/* eslint-disable no-undef */
require('./_google-motion.scss')

class EnterAndLeaveMouvement {

    constructor (options = {container, visibleClass, enterClass, leaveClass, ELEM_VISIBLE_STATE, ELEM_NOT_VISIBLE_STATE}) {
        
        const defaults = {
            visibleClass: 'show',
            enterClass: 'enter',
            leaveClass: 'leave',
            ELEM_VISIBLE_STATE: 'visible',
            ELEM_NOT_VISIBLE_STATE: 'notVisible'
        }

        const settings = Object.assign({}, defaults, options)
        this.settings = settings
        Object.freeze(this.settings)

        this._transitionEndPromises()
    }

    enterScreen () {
        const {container, visibleClass, enterClass, ELEM_VISIBLE_STATE} = this.settings
        container.classList.add(visibleClass, enterClass)

        return this._transitionEndPromises(ELEM_VISIBLE_STATE)
    }

    leaveScreen () {
        const { container, visibleClass, enterClass, leaveClass, ELEM_NOT_VISIBLE_STATE } = this.settings

        container.classList.remove(visibleClass, enterClass)
        container.classList.add(leaveClass)

        const leaveScreen = this._transitionEndPromises(ELEM_NOT_VISIBLE_STATE)
        leaveScreen.then(() => {
                container.classList.remove(leaveClass)
            })

        return leaveScreen
    }

    _transitionEndPromises (state) {
        const { container, visibleClass, ELEM_VISIBLE_STATE, ELEM_NOT_VISIBLE_STATE } = this.settings

        const p = new Promise((resolve, reject) => {
            container.addEventListener('transitionend', function () {
                if (this.classList.contains(visibleClass)) {
                    if (state === ELEM_VISIBLE_STATE) {
                        resolve(ELEM_VISIBLE_STATE)
                    }
                }
                if (state === ELEM_NOT_VISIBLE_STATE) {
                    resolve(ELEM_NOT_VISIBLE_STATE)
                }
            })
        })

        return p
    }

}

export { EnterAndLeaveMouvement }
