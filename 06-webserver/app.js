require('dotenv').config();
const express = require('express')
const hbs = require('hbs');


const app = express();
const port = process.env.PORT;



app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Servir contenido estatico
app.use( express.static('public') );

// app.use( express.static('public/hola-mundo') );

// app.get('/', (req, res) => {
//   res.send('Home Page');
// });


//hbs
app.get('/',  (req, res) => {
  res.render('home', {
    nombre: 'Juan Camilo Marin',
    titulo : 'Fututro Inge'
  });
});

// app.get('/generic',  (req, res) => {
//   res.sendFile(__dirname + '/public/generic.html');
// });
//hbs
app.get('/generic',  (req, res) => {
  res.render('generic', {
    nombre: 'Juan Camilo Marin',
    titulo : 'Fututro Inge'
  });
});

// app.get('/elements',  (req, res) => {
//   res.sendFile(__dirname + '/public/elements.html');
// });

//hbs
app.get('/elements',  (req, res) => {
  res.render('elements', {
    nombre: 'Juan Camilo Marin',
    titulo : 'Fututro Inge'
  });
});

// app.get('*',  (req, res) => {
//   res.sendFile(__dirname + '/public/404.html');
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

