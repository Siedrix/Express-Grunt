var app = require('express')()
  , servidor = require('http').createServer(app)
  , io = require('socket.io').listen(servidor);

app.get('/', function (req, res) {
  res.sendfile('./app/index.html');
});


exports = module.exports = servidor;
exports.use = function() {
	app.use.apply(app, arguments);
}
