require ('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

// const { mostrarMenu, pausa } = require('./helpers/mensajes');


const main = async() => {

    

    let opt = '';

    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB){


    }
    await pausa();
    do {
      //Imprimir el menu
      opt = await inquirerMenu();
      console.log({ opt });
      

      switch (opt) {

        case '1':
            const desc = await leerInput('Descripción : ');
            console.log(desc);
            tareas.crearTarea( desc );
          break;
      
        case '2':

        console.log( tareas.listadoArr );
          break;

        case '3':
          break;

        case '4':
          break;

        case '5':
          break;

        case '6':
          break;
      }

      // guardarDB(tareas.listadoArr);
      // const tarea = new Tarea('Comprar Comida');
      // // console.log(tarea);
      // // console.log(tareas);

      // tareas._listado [ tarea.id] = tarea; 
    
      // if ( opt !== '0' )  await pausa(); 
      
      await pausa();
   

    } while( opt !== '0' );
    
 
}

main();



