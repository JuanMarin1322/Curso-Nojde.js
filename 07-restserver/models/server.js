const express = require('express');
const cors = require('cors');
const fileUpload  = require('express-fileupload');
require('dotenv').config();

const { dbConnection } = require('../database/config');



class Server {

    constructor() {

        this.app  = express();
        this.port = process.env.PORT;

        this.path= {
            auth: '/api/auth',
            buscar :'/api/buscar',
            categorias :'/api/categorias',
            productos :'/api/productos',
            usuarios : '/api/usuarios',
            uploads :  '/api/uploads',

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


        //Fileupload - Carga de archivos
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/'
        }));
     
         
    }

    routes() {

       this.app.use( this.path.auth, require('../routes/auth'));
       this.app.use( this.path.usuarios, require('../routes/usuarios'));
       this.app.use( this.path.categorias, require('../routes/categorias'));
       this.app.use( this.path.productos, require('../routes/productos'));
       this.app.use( this.path.buscar, require('../routes/buscar'));
       this.app.use( this.path.uploads, require('../routes/upload'));
    }

    listen() {

        this.app.listen( this.port, () =>{
            console.log('Servidor Corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;