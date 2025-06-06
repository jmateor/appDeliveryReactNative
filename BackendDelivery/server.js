const express = require('express');
const app = express();
const http = require('http');
const Server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');

/*
* IMPORTAR RUTAS
*/
const usersRoutes = require('./routes/userRoutes');

const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.disable('x-powered-by');


app.set('port', PORT);

/*
* LLAMADO DE LAS RUTAS
*/
usersRoutes(app);

server = Server.listen(3000, '192.168.100.191' || 'localhost', function() {
  console.log('Aplicacion de Noodejs ' + process.pid + ' Iniciada... ')
});

// ROUTES
app.get('/', (req, res) => {
    res.send('Ruta Raiz');
});

// ERRORS
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send(err.stack);
});