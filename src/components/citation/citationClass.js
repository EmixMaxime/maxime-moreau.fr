export default class Citation {

    constructor (citations, citationElement, authorElement) {
        this.citations = citations
        this.citationElement = citationElement
        this.citationBlock = citationElement.parentElement
        this.authorElement = authorElement

        this.randomMax = this.citations.length - 1 // The last element of citations
        this._changeCitation()
    }

    _getCitation () {
        let randomCitation = ''
        let indexCitation
        let random = () => {
            indexCitation = Math.floor(Math.random() * (this.randomMax - 0 + 1)) // Entre 0 et le max !
            randomCitation = this.citations[indexCitation]
        }
        do { 
            random()
        } while (this.citationElement.textContent === randomCitation.content) // Tant que la citation choisie aléatoirement est la même que celle déjà mise alors on "re random"
        
        return randomCitation
    }

    _changeCitation () {
        const changeDom = () => {
            // J'ajoute l'animation sur l'opacité :
            this.citationBlock.classList.add('hidden')
        }

        this.citationBlock.addEventListener('transitionend', (e) => {
            // Pb rencntré :
            // On ajoute .hidden et on attend la fin de l'animation pour changer la citation, puis on enlève .hidden
            // Mais lorsqu'on enlève .hidden une transformation a lieu, donc l'événement transitionend est relancé à la fin (ce qui rechange la citation)
            // On change la citation que lorsque .hidden est là
            let target = e.target

            if (target.classList.contains('hidden')) {
                let newCitation = this._getCitation()
                this.citationElement.textContent = newCitation.content
                this.authorElement.textContent = newCitation.author
                this.citationBlock.classList.remove('hidden')
            }
        })
        window.setInterval(changeDom, 5000)
    }
}
