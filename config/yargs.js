const yargs = require('yargs')
.option('b',{
    alias:'base',
    type:'number',
    demandOption: true,
    describe:'La base de la tabla de multiplicar'
})
.option('l',{
    alias:'listar',
    type:'boolean',
    demandOption: true,
    default: false,
    describe:'Determina si se muestra o no la tabla de multiplicar'
})
.option('h',{
    alias:'hasta',
    type:'number',
    demandOption: true,
    default: 12,
    describe:'Determina hasta qué número multiplicar'
})
.check((argv, option)=>{
            if( isNaN( argv.b ) ){
                console.log('La base debe existir')
            }
            return true;
})
.argv;

module.exports = yargs;

