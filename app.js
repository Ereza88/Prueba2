
/**
 * Module dependencies.
 */
var controller = require("./controller");
var urlResponseHandlers = require("./urlResponseHandlers");
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var reservas = require('./routes/reservas');
var bodyParser = require('body-parser');
var multer = require('multer');
var dbUrl = process.env.MONGOHQ_URL
  || 'mongodb://@127.0.0.1:27017/Prueba2'
var connection = mongoose.createConnection(dbUrl);
connection.on('error', console.error.bind(console,
  'connection error:')); 
  
/*mongoose.connect('mongodb://localhost/primer_base2', function(error){
	if(error){
		throw error;		
	}else{
		console.log('Conectado a MongoDB');
	}
});*/
var ReservaSchema = mongoose.Schema({
	nombre: {type: String, required: true},
	apellido: {type: String, required: true},
	comensales: {type: String, required: true},
	observaciones: {type: String, required: true}
});
var ReservajeModel = mongoose.model('Reserva', ReservaSchema);
reservas.setModel(ReservajeModel);

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

app.get('/reservas', reservas.index);
app.get('/reservas/create', reservas.create);
app.post('/reservas', reservas.store);
app.get('/reservas/:id', reservas.show);
app.get('/reservas/:id/edit', reservas.edit);
app.put('/reservas/:id', reservas.update);
app.delete('/reservas/:id', reservas.destroy);

//app.use(express.static(__dirname + '/public'));



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
