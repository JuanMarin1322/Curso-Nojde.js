const deadpool = {

    nombre :'Wade' ,
    apellido :'Winston',
    poder : 'Regeneracion',
    edad : 50,
    getNombre(){
        return ` ${this.nombre} ${this.apellido} `;
    }
}


// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

function imprimeHeroe( heroe) {

    const {nombre, apellido,poder, edad }= heroe;

    console.log(nombre, apellido, poder, edad);
}


const imprimeHeroeConst = (heroe) =>{

    const {nombre, apellido,poder, edad }= heroe;

    console.log(nombre, apellido, poder, edad);
};
imprimeHeroe(deadpool);

imprimeHeroeConst(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];

// const h1 = heroes[0];
// const h2= heroes[1];
// const h3 = heroes[2];

// const [ h1, h2, h3] = heroes;
// console.log(h1,h2,h3);
const [ , ,h3] = heroes;

console.log(h3);
