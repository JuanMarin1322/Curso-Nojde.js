const inquirer = require('inquirer');

require('colors');


const preguntas = [

    {
        type: 'list',
        name: 'opt',
        message: '¿Qué desea hacer?',
        choices: [ {
                    value: '1',
                    name: `${'1.'.blue} Crear tarea`
                   },
                   
                   {
                    value: '2',
                    name: `${'2.'.blue} Listar Tarea.`
                   },

                   {
                    value: '3',
                    name: `${'3.'.blue} Listar Tareas Completadas.`
                   },

                   {
                    value: '4',
                    name: `${'4.'.blue} Listar Tareas Pendientes.`
                   },

                   {
                    value: '5',
                    name: `${'5.'.blue} Completar Tarea(s).`
                   },

                   {
                    value: '6',
                    name: `${'6.'.blue} Borrar Tarea.`
                   },

                   {
                    value: '0',
                    name: `${'0.'.red} Salir.`
                   }
                ]
 

    }

]

const inquirerMenu = async () => {

    console.clear();
    console.log('========================'.green);
    console.log(' Seleccione una opción'.white);
    console.log('========================\n'.green);


    const {opt} = await inquirer.prompt( preguntas);
    
    return opt;

}

const pausa = async() =>{

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green} para continuar`

        }

    ];
    console.log('\n');
    await inquirer.prompt(question);
}


const leerInput = async( message) => {

    const question = [
        {   
            type : 'input',
            name : 'desc',
            message,
            validate( value ){
                if( value.length === 0){

                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }

    ];

    const {desc} = await inquirer.prompt(question);
    return desc;
}
module.exports = {

    inquirerMenu,
    pausa,
    leerInput
    
}