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
            // Mostrar mensaje
           const termino = await leerInput('Ciudad: ');
             // Buscar los lugares
           const lugares= await busquedas.ciudad( termino );
           // Seleccionar el lugar
           const id = await listadoLugares(lugares);

           if (id === '0' ) continue;
           const lugarSeleccionado = lugares.find(l => l.id === id);
           
           busquedas.agregarHistorial(lugarSeleccionado.nombre);
           
           const climaCiudad =await busquedas.climaLugar(lugarSeleccionado.lat,lugarSeleccionado.lng);
            
            console.log('\nInformacion de la ciudad\n'.green)
            console.log('Ciudad:', lugarSeleccionado.nombre)
            console.log('Lat:', lugarSeleccionado.lat)
            console.log('Lng:', lugarSeleccionado.lng)
            console.log('Temperatura:', ` ${climaCiudad.temp + ' °C'} `.yellow)
            console.log('Minima:', ` ${climaCiudad.min + ' °C'} `.yellow)
            console.log('Maxima:', ` ${climaCiudad.max + ' °C'} `.yellow)
            console.log('Como está el clima:', climaCiudad.desc.green)
            
            break;
            
          case 2:

            busquedas.historialCapitalizado.forEach( (lugar,i) => {
              const idx = `${ i +1}`.green;

              console.log(`${idx} ${ lugar}`)

          })
            break;

        }
       

      if(opt !==0)  await pausa();
        
    } while (opt !== 0);
}

main();