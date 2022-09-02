const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { dbConnection } = require('../database/config');



class Server {

    constructor() {

        this.app  = express();
        this.port = process.env.PORT;

        this.path= {
            usuarios : '/api/usuarios',
            auth: '/api/auth',
            categorias:'/api/categorias'

        }

        // this.usuariosRoutePath = '/api/usuarios';
        // this.authPath = '/api/auth';
        // this.categoriasRouteParh = '/api/categorias';

        //Conecion a la base de datos 
        this.conectatDB();
        
        // Middlewares
        this.middlewares();

        this.app.use(cors());

        //Rutas de la applicacion 
        this.routes();
    }


    async conectatDB(){

        await dbConnection();
    }

    middlewares(){

        //CORS
        

        //Lectura y parseo del Body
        this.app.use( express.json() );


        // Dirrectorio publico
        this.app.use(express.static('public') );
     
         
    }

    routes() {

       this.app.use( this.path.auth, require('../routes/auth'));
       this.app.use( this.path.usuarios, require('../routes/usuarios'));
       this.app.use( this.path.categorias, require('../routes/categorias'));
    }

    listen() {

        this.app.listen( this.port, () =>{
            console.log('Servidor Corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;