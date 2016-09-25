export default class Timeline {
    private timelines;
    private classHidden;
    private _observer;

    constructor (timelines, classHidden) {
        this.timelines = timelines
        this.classHidden = classHidden
        this._observer = this.observer()
    }

    observer () {
        return new IntersectionObserver(function (observables) { // Lancé que si le threshold > 0.5 ou threshold < 0.5

            observables.forEach(function (observable) {
                if (observable.intersectionRatio > 0.5) {
                    observable.target.classList.remove('hidden')
                    this._observer.unobserve(observable.target)
                    console.log('Item visible', observable)
                }
            })
        }, {
            threshold: [0.5] // Lorsque l'élement a plus de 50% de visible
        })
    }

    animate () {
        console.log(this._observer);
        this.timelines.forEach((item) => {
            item.classList.add('hidden')
            this._observer.observe(item)
        })
    }
}