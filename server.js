var express = require('express'),
	cons    = require('consolidate'),
	swig    = require('swig');

var app = express();

var addStaticFile = require('./tasks/addStaticFile');

swig.init({
	cache : false
});

app.use( express.static('./public') );

app.engine('.html', cons.swig);
app.set('view engine','html');
app.set('views', './app/views');

app.use(express.bodyParser());
app.use(express.cookieParser());

app.get('/',function (req, res) {
	res.render('index');
});

app.post('/task/createFile', function(req, res){
	addStaticFile.once('done', function(result){
		res.redirect(result.filepath);
	});

	addStaticFile.run({
		content  : req.body.content,
		filename : req.body.filename
	});
});

module.exports = app;
