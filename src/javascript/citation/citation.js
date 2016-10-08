import Citation from './citationClass'

const citations = [
    { author: 'Socrate', content: "Tout ce que je sais, c'est que je ne sais rien" },
    { author: 'bidule', content: "L'homme est un loup pour l'homme" }
]

new Citation(citations, '#citation', '.author')
