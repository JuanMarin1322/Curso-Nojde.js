const yargs = require('yargs')
                .option('b', {
                    alias : 'base',
                    type : 'number',
                    describe :'Es la base de la tabla de multiplicar'
                
                })
                .option('l', {
                    type :'boolean',
                    alias : 'listar',
                    default: false, 
                    describe : 'Muestra la tabla en consola'  
                })
                .option('h', {
                    type :'number',
                    alias : 'hasta',
                    default: false, 
                    describe : 'Es el numero hasat dodne queremos hacer la multiplicacion'  
                })
                .check( ( yargs, options ) => {

                    if( isNaN(yargs.base) ){
 
                         throw 'La base tiene que ser un numero'
                    }
                    return true;
                    
                 })
                .argv;

module.exports = yargs;