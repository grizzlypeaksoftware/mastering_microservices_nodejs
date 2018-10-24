var express = require('express');
var app = express();
var path = require('path');
require('dotenv').load();

const bodyParser = require('body-parser');
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.engine('pug', require('pug').__express)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static('static'));

// Instantiate the  Model
var model = require('./models/microserviceModel');

app.use(express.static('static'));

app.get('/get', function(req,res){
	model.GetNotes(req).then(function(docs){
		res.send(docs);
	}).catch(function(err){
		res.send(err);
	});	
});

app.post('/insert', function(req,res){
	model.Insert(req).then(function(docs){
		res.send(docs);
	}).catch(function(err){
		res.send(err);
	});	
});

var server = app.listen(process.env.PORT, function () {
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Server Running On: http://%s:%s', host, port);
});