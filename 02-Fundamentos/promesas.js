
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
        salario : 1500
    }
];


const getEmpleado = ( id) =>{

    const empleado = empleados.find(e => e.id === id)
    ?.nombre;

    return new Promise (( resolve, reject) => {

        (empleado) ?
            resolve(empleado) :
            reject(`Empleado con el id ${id}, NO EXISTE.`);
        

    });

 
};

const getSalario = ( id) =>{

    const salario = salarios.find(s => s.id === id)?.salario;
    
    return new Promise (( resolve, reject) => {

        (salario) ?
            resolve(salario) :
            `No existe salario para el id ${id}.`
        

    });

 
};




const id = 10;

// getEmpleado( id )
//     .then( empleado => console.log( empleado))
//     .catch( err => console.log( err));
    
// getSalario( id )
//     .then( salario => console.log( salario))
//     .catch( err => console.log(err));

// getEmpleado( id )
//     .then( empleado => {
//         getSalario( id)
//                 .then( salario => console.log(`El empleado con nombre ${empleado} tiene un salario de ${salario}`))
//                 .catch( err => console.log(err));
        
//     })
//     .catch( err => console.log( err));
let nombre ;
getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        return getSalario( id) 
    } )
    .then( salario => console.log(`El empleado con nombre ${nombre} tiene un salario de ${salario}`))
    .catch( err => console.log( err));