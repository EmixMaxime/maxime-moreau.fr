export class Citation {

    constructor (citations, citationSelector, authorSelector) {
        this.citations = citations
        this.citationNode = document.querySelector(citationSelector)
        this.citation = this.citationNode.querySelector('p')
        this.author = this.citationNode.querySelector(authorSelector)

        if (!this.citation) throw `[CITATIONS] Il n'y a pas de balise <p></p> dans ${citationSelector}`
        if (!this.citationNode) throw `[CITATIONS] L\'élement : "${citationSelector}" est introuvable dans le DOM`
        if (!this.author) throw `[CITATIONS] L\'élement : "${authorSelector}" est introuvable dans le DOM`

        // this.randomMax = Object.keys(citations).length // Le nombre de clefs dans l'object
        this.randomMax = this.citations.length - 1 // The last element of citations
        this.changeCitation()
    }

    getCitation () {
        let randomCitation
        let indexCitation
        let random = () => {
            indexCitation = Math.floor(Math.random() * (this.randomMax - 0 + 1)) + 0 // Entre 0 et le max !
            randomCitation = this.citations[indexCitation]
        }
        do { 
            random()
        }
        while (this.citation.textContent === randomCitation.content) // Tant que la citation choisie aléatoirement est la même que celle déjà mise alors on "re random"
        
        return randomCitation
    }

    changeCitation () {
        let changeDom = () => {
            // J'ajoute l'animation sur l'opacité :
            this.citationNode.classList.add('hidden')
        }

        this.citationNode.addEventListener('transitionend', (e) => {
            // Pb rencntré :
            // On ajoute .hidden et on attend la fin de l'animation pour changer la citation, puis on enlève .hidden
            // Mais lorsqu'on enlève .hidden une transformation a lieu, donc l'événement transitionend est relancé à la fin (ce qui rechange la citation)
            // On change la citation que lorsque .hidden est là
            let target = e.target

            if (target.classList.contains('hidden')) {
                let newCitation = this.getCitation()
                this.citation.textContent = newCitation.content
                this.author.textContent = newCitation.author
                this.citationNode.classList.remove('hidden')
            }
        })
        window.setInterval(changeDom, 5000)
    }
}
