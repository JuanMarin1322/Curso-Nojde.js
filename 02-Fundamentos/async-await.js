
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
            reject( `No existe salario para el id ${id}.`);
        

    });

 
};

const getInfoUsuario = async() => {

    try {

        const empleado = await getEmpleado( id);
        const salario = await getSalario(id);

        return (`El empleado con nombre ${empleado} tiene un salario de ${salario}`);

   
    } catch (error) {
        throw error; 
    }

   
}
const id = 10;
getInfoUsuario( id)
    .then( msg => console.log( msg) )
    .catch( err => console.log( err));