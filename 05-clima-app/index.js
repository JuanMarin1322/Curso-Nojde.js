require ('dotenv').config();

const { inquirerMenu, pausa, leerInput, listadoLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");





const main = async() => {

    const busquedas =  new Busquedas;
    let opt = '';

       do {

        opt = await inquirerMenu();
        switch (opt) {

          case 1:
            const termino = await leerInput('Ciudad: ');
           const lugares= await busquedas.ciudad( termino );
           const id = await listadoLugares(lugares);

           const lugarSeleccionado = lugares.find(l => l.id === id);
      
            console.log('\nInformacion de la ciudad\n'.green)
            console.log('Ciudad:', lugarSeleccionado.nombre)
            console.log('Lat:', lugarSeleccionado.lat)
            console.log('Lng:', lugarSeleccionado.lng)
            console.log('Temperatura:',)
            console.log('Minima:',)
            console.log('Maxima:',)
            break
            
          case 2:
            break;

          case 3:
            break;

        }
       

      if(opt !==0)  await pausa();
        
    } while (opt !== 0);
}

main();