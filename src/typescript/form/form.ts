export interface interfaceFormOptions {
    inputSelector: string,
    labeledClass: string,
    focusedClass: string
}

export class AnimateForm {

    private inputs: NodeListOf<Element>
    private options: interfaceFormOptions

    constructor (options: interfaceFormOptions) {
        this.options = options
        this.inputs = document.querySelectorAll(options.inputSelector)
        if(this.inputs.length == 0) {
            console.error(`[FORM] L'élement '${options.inputSelector}' est introuvable dans le DOM`)
        }
        this.animate()
    }

    private animate () : void {
        let self = this
        for(let i = 0; i < this.inputs.length; i++) {
            let field: Element = this.inputs[i]

            field.addEventListener('focus', function () {
                this.parentNode.classList.add(self.options.focusedClass , self.options.labeledClass) // has-label = show the label on top of the input
            })

            field.addEventListener('blur', function () {
                let label: Element = this.parentNode
                if (this.value === '') {
                    label.classList.remove(self.options.labeledClass)
                }
                label.classList.remove(self.options.focusedClass)
            })
        }
    }
}