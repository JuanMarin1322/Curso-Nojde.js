const { v4: uuidv4 } = require('uuid');


class Tarea {
    id   = '';
    desc = '';
    compeltadoEn = null;


    constructor( desc) {

        this.id = uuidv4();
        this.desc = desc;
        this.compeltadoEn = null;
    }

    

}


module.exports = Tarea;

