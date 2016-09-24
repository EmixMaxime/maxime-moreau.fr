export interface interfaceHeaderRespOptions {
    iconSelector: string,
    bodyClass: string,
    hiddenSelector: string
}

export class HeaderResponsive {
    constructor (options: interfaceHeaderRespOptions) {
        let iconNode = document.querySelector(options.iconSelector)
        let hiddenNode = options.hiddenSelector ? document.querySelector(options.hiddenSelector) : null // The hidden effect is optional

        if (!iconNode) throw `[HEADER] L\'élement : "${options.iconSelector}" est introuvable dans le DOM`
        if (options.hiddenSelector && !hiddenNode) throw `[HEADER] L\'élement : "${options.hiddenSelector}" est introuvable dans le DOM`

        let eventCliqued = function (e) {
            e.preventDefault()
            document.body.classList.toggle(options.bodyClass)
        }

        iconNode.addEventListener('click', eventCliqued)
        if (hiddenNode) hiddenNode.addEventListener('click', eventCliqued)

    }
}

interface headerResponsiveInterface {
    iconSelector: string,
}

const test = (options) => {
}