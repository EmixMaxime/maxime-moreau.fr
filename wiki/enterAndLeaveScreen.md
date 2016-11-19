# EnterAndLeaveMouvement
Class définie dans `src/components/google-motion/Animations.js` *(inclu le scss _google-motion.scss)*. <br />
Elle me sert à animer les élements qui doivent apparaître et disparaitre de l'écran, suivant le material design. <br />
[Ressources du material design](https://material.google.com/motion/movement.html#) <br />

## Exemple d'utilisation
Lorsque je souhaite animer un élement avec un trigger : 
``` javascript
const elem = document.querySelector('#elem')
const trigger = document.querySelector('#trigger')

const Animation = new EnterAndLeaveMouvement({container: elem})

trigger.addEventListener('click', function (e) {
	e.preventDefault()
	const classList = this.classList

	if (classList.contains('opened')) {
		Animation.leaveScreen()
		classList.remove('opened')
	} else {
		Animation.enterScreen()
		classList.add('opened')
	}
})
```

## Paramètres :
Tous doit être passer dans un objet. <br />
Possibilités :
- visibleClass : optionnel : si on doit modifier les display (exemple avec ma partie creations)
- enterClass : optionnel | default: 'enter'
- leaveClass : optionnel | default: 'leave'
- ELEM_VISIBLE_STATE: optionnel | default: 'visible'
- ELEM_NOT_VISIBLE_STATE: optionnel | default: 'notVisible'

Les constantes `ELEM` sont utilisées en interne pour savoir quand résoudre les Promises. <br >
### Exemple :
``` javascript
Animation.leaveScreen().then(() => { // l'élement n'est plus visible (transition terminée)  })
``` 

## enterScreen
Cette fonction effectue ces tâches :
- ajoute la class `enterClass` qui est défini par défaut par `.enter`.
- retourne une Promise qui est résolue lorsque l'élement est entrer *(l'animation est terminée)*

## leaveScreen
Cette fonction effectue ces tâches :
- enlève les class `enterClass` et `visibleClass`.
- ajoute la class `leaveClass`
- une fois que l'élement n'est plus visible enlève la class `leaveClass`.

La promise qui est retourner est résolue lorsque l'élement n'est plus visible. 
