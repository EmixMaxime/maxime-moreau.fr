class Skill {
    constructor (container) {
        this.observer().observe(container)
    }

    observer () {
        return new IntersectionObserver(observables => {
            observables.forEach(observable => {
                if (observable.intersectionRatio > 0.3) {
                    observable.target.classList.remove('no-visibility')
                }
            })
        }, {
            threshold: [0.3]
        })
    }
}

const container = document.querySelectorAll('skills')
container.classList.add('no-visibility')
new Skill(container)
