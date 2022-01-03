const yargs = require('yargs')
.option('b',{
    alias:'base',
    type:'number',
    demandOption: true
})
.option('l',{
    alias:'listar',
    type:'boolean',
    demandOption: true,
    default: false

})
.option('h',{
    alias:'hasta',
    type:'number',
    demandOption: true,
    default: 12
})
.check((argv, option)=>{
            if( isNaN( argv.b ) ){
                console.log('La base debe existir')
            }
            return true;
})
.argv;

module.exports = yargs;

