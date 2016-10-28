/* eslint-disable no-undef */
export default class Visibility {

    constructor (elements, options = {}) {
        this.elements = elements

        const defaults = {
            hiddenClass: 'hidden',
            threshold: 0.5
        }

        this.settings = Object.assign({}, options, defaults)
        Object.freeze(this.settings)

        this.observer = this._observer()
        this._animate()
    }

    _observer () {
        const { threshold, hiddenClass } = this.settings

        return new IntersectionObserver(observables => { // eslint-disable-line no-undef
            // Lancé que si le threshold > 0.5 ou threshold < 0.5

            observables.forEach(observable => {

                if (observable.intersectionRatio > threshold) {
                    observable.target.classList.remove(hiddenClass)
                    this.observer.unobserve(observable.target)
                }

            })
        }, {
            threshold: [threshold] // Lorsque l'élement a plus de X % de visible
        })
    }

    _animate () {
        const { hiddenClass } = this.settings
        const elements = this.elements

        if (elements instanceof NodeList) { // eslint-disable-line no-undef
            elements.forEach(item => {
                item.classList.add(hiddenClass)
                this.observer.observe(item)
            })
        } else {
            elements.classList.add(hiddenClass)
            this.observer.observe(elements)
        }
    }
}
