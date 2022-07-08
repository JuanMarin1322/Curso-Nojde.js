const inquirer = require('inquirer');

require('colors');


const preguntas = [

    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [ {
                    value: '1',
                    name: '1. Crear tarea'
                   },
                   
                   {
                    value: '2',
                    name: '2. Listar Tarea.'
                   },

                   {
                    value: '3',
                    name: '3. Listar Tareas Completadas.'
                   },

                   {
                    value: '4',
                    name: '4. Listar Tareas Pendientes.'
                   },

                   {
                    value: '5',
                    name: '5. Completar Tarea(s).'
                   },

                   {
                    value: '6',
                    name: '6. Borrar Tarea.'
                   },

                   {
                    value: '0',
                    name: '0. Salir.'
                   }
                ]
 

    }

]

const inquirerMenu = async () => {

    console.clear();
    console.log('========================'.green);
    console.log(' Seleccione una opción'.green);
    console.log('========================\n'.green);


    const { opt } = await inquirer.prompt( preguntas);
    
    return opt;

}

module.exports = {

    inquirerMenu
}