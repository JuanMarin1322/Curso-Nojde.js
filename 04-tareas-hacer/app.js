require ('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar} = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

// const { mostrarMenu, pausa } = require('./helpers/mensajes');


const main = async() => {

    

    let opt = '';

    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB){

      tareas.cargarTareasFromArray(tareasDB);
    }

    do {
      //Imprimir el menu
      opt = await inquirerMenu();
      
      

      switch (opt) {

        case '1':

            const desc = await leerInput('Descripción : ');
            console.log(desc);
            tareas.crearTarea( desc );

            break;
      
        case '2':
        //  console.log(tareas._listado);
            tareas.listadoCompleto();
          break;

        case '3':
          tareas.listarPendientesCompletadas(true);
          break;

        case '4':
          tareas.listarPendientesCompletadas(false);
          break;

        case '5':
          break;

        case '6':
          const id = await listadoTareasBorrar( tareas.listadoArr );
          if(id !== '0' ){
            const ok = await confirmar('¿Esta seguro?')
          
          if ( ok ) {


            
            tareas.borrarTarea( id );
            console.log( 'Tarea Borrrada');
            
          }
        }
          break;
      }

      guardarDB(tareas.listadoArr);
      await pausa();
      // const tarea = new Tarea('Comprar Comida');
      // // console.log(tarea);
      // // console.log(tareas);

      // tareas._listado [ tarea.id] = tarea; 
    
      // if ( opt !== '0' )  await pausa(); 
      
      
   

    } while( opt !== '0' );
    
 
}

main();



