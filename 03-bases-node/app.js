
const { crearArchivo } = require('./helpers/multiplicar.js')

const yargs = require('yargs').argv;


 console.log(process.argv);
 
 console.log(yargs);

 console.log('base: yargs', yargs.base || yargs.b)
const [ , , arg3 = 'base = 5'] = process.argv;

// console.log(arg3);

const [ , base = 5 ] = arg3.split('=');

// console.log(base);


// crearArchivo( base)
//     .then( nombreArchivo => console.log(nombreArchivo, 'ARCHIVO CREADO'))
//     .catch( err => console.log(err) );

// console.clear();

// console.log('======================');
// console.log('    Tabla del : 5');
// console.log('======================');
// const base = 3;
// let salida = ''
// const multiplicar = (numero) => {

//     for(let i = 1; i <= 10 ; i ++){

       
//         salida += ` ${numero} x ${ i }  = ${numero * i} \n`;
       
//     }
//     console.log(salida);
// };

// multiplicar(base);

// fs.writeFile(`tabla-${base}.txt`, salida, (err) => { if (err) throw err;
//   console.log(`tabla-${base}.txt creado!`);
//  })


// fs.writeFileSync(`tabla-${base}.txt`, salida);

// console.log(`tabla-${base}.txt creado!`);
  
