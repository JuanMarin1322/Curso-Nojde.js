const e = require("express");


const empleados =  [

    {

        id : 1,
        nombre : 'Juan'
    },
    {

        id : 2,
        nombre : 'Laurent'
    },
    {

        id : 3,
        nombre : 'Sofia'
    }
];
const salarios =  [

    {

        id : 1,
        salario: 1500
    },
    {

        id : 2,
        nombre : 1500
    }
];


const getEmpleado = ( id, callback) =>{

    const empleado = empleados.find(e => e.id === id);
    
    if ( empleado) {
       callback(null, empleado);

    }else {
    callback(`Empleado con el id ${id}, NO EXISTE.`);
    }
    // const salario = salarios.find(e => e.id === id);

    
};

getEmpleado( 2, ( err, empleado) => {

    if (err){
        console.log('ERROR!');
        return console.log(err);

    }

    console.log('Empleado Existe!!')
    console.log(empleado);

});
