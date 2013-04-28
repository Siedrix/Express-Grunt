var express = require('express'),
	cons    = require('consolidate'),
	swig    = require('swig');

var server = express();

var addStaticFile = require('../tasks/addStaticFile');

swig.init({
	cache : false
});

server.use( express.static('./public') );

server.engine('.html', cons.swig);
server.set('view engine','html');
server.set('views', './app/views');

server.use(express.bodyParser());
server.use(express.cookieParser());

server.get('/',function (req, res) {
	res.render('index');
});

server.post('/task/createFile', function(req, res){
	addStaticFile.once('done', function(result){
		res.redirect('/'+ result.filename + '.txt');
	});

	addStaticFile.run({
		content  : req.body.content,
		filename : req.body.filename
	});
});

module.exports = server;
