const {crearTablaTXT} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require ('colors');

console.clear();

crearTablaTXT(argv.b, argv.l, argv.h)
     .then((nombreArchivo) => console.log(`${nombreArchivo.bgCyan} creado`))
     .catch((err) => console.log(err))


