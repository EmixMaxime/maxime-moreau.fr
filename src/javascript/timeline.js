export default class Timeline {

    constructor (timelines, classHidden) {
        this.timelines = timelines
        this.classHidden = classHidden
        this._observer = this.observer()
    }

    observer () {
        return new IntersectionObserver(function (observables) { // eslint-disable-line no-undef
            // Lancé que si le threshold > 0.5 ou threshold < 0.5

            observables.forEach(observable => {
                if (observable.intersectionRatio > 0.5) {
                    observable.target.classList.remove('hidden')
                    // debugger // eslint-disable-line no-debugger

                    // this._observer.unobserve(observable.target) TODO: amélioration des performances en mettant ça en place, pb de this undefined à corriger
                    console.log('Item visible', observable)
                }
            })
        }, {
            threshold: [0.5] // Lorsque l'élement a plus de 50% de visible
        })
    }

    animate () {
        this.timelines.forEach(item => {
            item.classList.add('hidden')
            this._observer.observe(item)
        })
    }
}
