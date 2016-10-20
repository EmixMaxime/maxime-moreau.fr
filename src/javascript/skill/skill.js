class Skill {
    constructor (container) {
        this.observer().observe(container)
    }

    observer () {
        return new IntersectionObserver(observables => { // eslint-disable-line no-undef
            observables.forEach(observable => {
                if (observable.intersectionRatio > 0.8) {
                    observable.target.classList.remove('hidden')
                    console.log(observable.target, ' become visible')
                }
            })
        }, {
            threshold: [0.8]
        })
    }
}

const container = document.querySelector('#skills')
container.classList.add('hidden')

console.log(container)
new Skill(container)
