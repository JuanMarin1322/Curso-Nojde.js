
const { crearArchivo } = require('./helpers/multiplicar.js');
const yargs  = require ('./config/yargs');
const colors = require ('colors');

console.clear();



crearArchivo( yargs.b, yargs.l, yargs.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'ARCHIVO CREADO'))
    .catch( err => console.log(err) );


// fs.writeFile(`tabla-${base}.txt`, salida, (err) => { if (err) throw err;
//   console.log(`tabla-${base}.txt creado!`);
//  })


// fs.writeFileSync(`tabla-${base}.txt`, salida);

// console.log(`tabla-${base}.txt creado!`);
  
