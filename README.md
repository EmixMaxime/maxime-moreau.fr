# Portfolio
## - Comment fonctionne ce site static ?
### Les langages :
  - Sass
  - Jade
  - Yaml (format de données)

### Structure :
  - **templates** -> fichiers Jade, et le fichier **daya.yml**
  - **public** -> fichiers HTML compilés
  
  - **sass** -> fichers Sass
  - **css** -> fichiers CSS compilés

### Outils :
J'utilise [Gulp](http://gulpjs.com/) pour effecuter mes tâches, telles que compiler mes fichier Jade Scss... <br>
Ainsi que [Susy](http://susy.oddbird.net/) pour gérer le responsive design, se trouvant dans le fichier [_susy.scss](https://github.com/EmixMaxime/portfolio/blob/master/sass/_susy.scss).

### Qu'est-ce le fichier data.yml ?
Le contenu de mon header ainsi que mes compétances est créé à partir de ce fichier.
Si je souhaite ajouter un lien dans mon menu, il me suffit d'ajouter ces lignes :
```yaml
menu:
  -
    link: /link
    name: MonSuperLien
```
Et si je souhaite ajouter une compétences :
```yaml
skills:
  -
    name: symfony
    img: symfony.png
    percent: seventy
```
### Comment ces données se retrouvent elles dans mes fichiers templates?
J'utilise [yamljs](https://www.npmjs.com/package/yamljs) pour parser ce fichier et envoyer les données dans mes templates :
Pour plus d'informations voir la tâche "html" de mon fichier [gulpfile](https://github.com/EmixMaxime/portfolio/blob/master/gulpfile.js).

