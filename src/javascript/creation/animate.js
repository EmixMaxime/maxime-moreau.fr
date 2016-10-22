export default class Animate {

    constructor (speed, easing) {
        this.speed = speed
        this.easing = easing
    }

    anime (element, snap) {
        const path = snap.select('path')
        const pathConfig = {
            from: path.attr('d'),
            to: element.getAttribute('data-path-hover')
        }

        element.addEventListener('mouseenter', () => {
            path.animate({'path': pathConfig.to}, this.speed, this.easing)
        })

        element.addEventListener('mouseleave', () => {
            path.animate({'path': pathConfig.from}, this.speed, this.easing)
        })
    }
}
