var Task = require('../lib/task'),
	fs   = require('fs');

var addStaticFile = new Task(function(config, done){
	console.log('doing something', config);

	fs.writeFile('./public/' + config.filename +'.txt', config.content, function (err) {
		if (err) throw err;
		done({filepath : './public/' + config.filename +'.txt'});
	});

});

module.exports = addStaticFile;

