require ('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

// const { mostrarMenu, pausa } = require('./helpers/mensajes');


const main = async() => {

    

    let opt = '';

    do {

      opt = await inquirerMenu();
      console.log({ opt });
      // const tareas = new Tareas();
      // const tarea = new Tarea('Comprar Comida');
      // // console.log(tarea);
      // // console.log(tareas);

      // tareas._listado [ tarea.id] = tarea; 
    
      // if ( opt !== '0' )  await pausa(); 
      
      await pausa();
   

    } while( opt !== '0' );
    
 
}

main();



