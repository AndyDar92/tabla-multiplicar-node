const yargs = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicador');

console.log(yargs);

crearArchivo(yargs.b, yargs.l, yargs.h)
    .then(archivo => console.log(archivo, 'creado'))
    .catch(err=> console.log(err));



