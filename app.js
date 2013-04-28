var argv = require('optimist').argv;

if(argv._[0] === undefined){
	console.log('start server');
	var server = require('./app/server');

	server.listen(3000);
}

if(argv._[0] === 'run'){
	var taskName = argv._[1];
	console.log('load and run tast, passing arguments', taskName);

	var task = require('./tasks/'+ taskName);

	task.on('done', function (result) {
		console.log('task completed', result);
	});

	task.run(argv);
}