const express = require('express');

const app = express();

const hbs = require('hbs');
require('./hbs/helpers/helpers')

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'cristhoperr davaloS',
        anio: 2020
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        anio: 2020
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});