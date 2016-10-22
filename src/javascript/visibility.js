export default class Visibility {

    constructor (elements, classHidden, threshold) {
        this.elements = elements
        this.threshold = threshold
        this.classHidden = classHidden

        this._observer = this.observer()
    }

    observer () {
        return new IntersectionObserver(observables => { // eslint-disable-line no-undef
            // Lancé que si le threshold > 0.5 ou threshold < 0.5

            observables.forEach(observable => {
                if (observable.intersectionRatio > this.threshold) {
                    observable.target.classList.remove(this.classHidden)
                    this._observer.unobserve(observable.target)
                }
            })
        }, {
            threshold: [this.threshold] // Lorsque l'élement a plus de X % de visible
        })
    }

    animate () {
        if (this.elements instanceof NodeList) { // eslint-disable-line no-undef
            this.elements.forEach(item => {
                item.classList.add(this.classHidden)
                this._observer.observe(item)
            })
        } else {
            this.elements.classList.add(this.classHidden)
            this._observer.observe(this.elements)
        }
    }
}
