require('colors');
const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: ('Es la base sobre la cual se hace la tabla de multiplicar'.cyan)
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    describe: ('Es el limite de la tabla de multiplicar es decir, hasta que numero se multiplicara la base'.cyan)
                })
                .option('l',{
                    alias: 'list',
                    default: false,
                    type: 'boolean',
                    describe: ('Muestra por pantalla la tabla de multiplicar '.cyan)
                })
                .check( (argv, options) =>{
                    if(isNaN(argv.b)){
                        throw 'La base debe ser un numero';
                    }
                    return true;
                })
                .argv;

module.exports = argv; //Exporto la referencia