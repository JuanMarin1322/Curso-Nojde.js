const express = require('express');
require('dotenv').config();

class Server {

    constructor() {

        this.app  = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares()
        //Rutas de la applicacion 
        this.routes();
    }

    middlewares(){
        // Dirrectorio publico
        this.app.use(express.static('public'))

    }

    routes() {

        this.app.get('/hola-mundo',  (req, res) => {
            res.send('Hello World');
          }); 

    }

    listen() {

        this.app.listen( this.port, () =>{
            console.log('Servidor Corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;