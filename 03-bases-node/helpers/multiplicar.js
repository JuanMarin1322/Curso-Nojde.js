const { green } = require('colors');
const fs = require('fs');
const colors = require ('colors');


const crearArchivo = async ( base = 5, listar = false, hasta =10) => {

try {

    
    let salida, consola = ''

    for (let i = 1; i <= hasta ; i ++){

       
        salida += ` ${base} ${ 'x'} ${ i }  ${'='} ${base * i} \n`;
        consola += ` ${base} ${ 'x'.grey} ${ i }  ${'='.random} ${base * i} \n`;
       
    }

    if(listar){
        console.clear();

        console.log('======================'.green);
        console.log('   Tabla del :',colors.blue(base) );
        console.log('======================' .green);
        console.log(consola);

    }
    


    

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    return `tabla-${base}.txt creado!`;
      



        } catch (error) {
            throw error;
        }
        
}

module.exports =  {
        crearArchivo
}