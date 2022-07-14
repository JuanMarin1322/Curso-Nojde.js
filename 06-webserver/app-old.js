
const http = require('http');

http.createServer( ( req, res) => {

    console.log(req);
    // res.writeHead(200, { 'Content-Type': 'application/json'});
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    
    // res.writeHead(200, { 'Content-Type': 'application/csv'});

    // const persona = {

    //     id : 1,
    //     nombre: 'Juan Camilo'
    // }

    res.write('Hola Mundo')
    // res.write( JSON.stringify(persona));
    // res.write('id, nombre\n');
    // res.write('1, Juan Camilo\n');
    // res.write('2, Sofia\n');
    // res.write('3, Carlos\n');
    res.end();
})
.listen( 8080 );

console.log('Escuchando en el puerto', 8080)
