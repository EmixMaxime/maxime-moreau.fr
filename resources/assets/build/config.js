const path = require('path')

const envPath = path.resolve(__dirname, '../../../')
process.env.ROOT_PATH = envPath;

require('dotenv').config({ path: `${envPath}/.env` })
const buildPath = path.resolve(process.env.ROOT_PATH, 'public/assets/')

const ASSETS_DELIVERED_WEBPACK_URI = process.env.ASSETS_DELIVERED_WEBPACK_URI
const ASSETS_PUBLIC_PATH = process.env.ASSETS_PUBLIC_PATH

const [_protocol, _url, port] = ASSETS_DELIVERED_WEBPACK_URI.split(':')

module.exports = {
  entry: {
    main: ['../sass/main.scss', '../js/main.js'],
    cv: ['../pages/cv/cv.js']
  },
  port,
  html: false,
  browsers: ['last 2 versions', 'ie > 8'],
  assets_url: `/${ASSETS_PUBLIC_PATH}/`,  // Urls dans le fichier final attention au / à la fin pour la génération du fichier assets.json !!
  assets_path: `${buildPath}/`, // ou build ? : Attention -> obligation de mettre le / à  la fin
  stylelint: '',
  refresh: [path.resolve(envPath, 'resources/views/**/*.twig')], // Permet de forcer le rafraichissement du navigateur lors de la modification de ces fichiers
  historyApiFallback: false // Passer à true si on utilise le mode: 'history' de vue-router (redirige toutes les requêtes sans réponse vers index.html)
}
