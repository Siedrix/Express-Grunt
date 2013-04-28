var	Neon = require('neon'),
	EventEmitter = require("events").EventEmitter;

var Task = Neon.Class()({
	prototype : {
		init : function(task){
			console.log('init task');

			this._ee = new EventEmitter();

			this.task = task;
		},
		run : function(config){
			var task = this;
			var done = function(result){
				task._ee.emit('done', result);
			};

			this.task(config, done);
		},
		on : function(event, listener){
			this._ee.on(event, listener);
		},
		once : function(event, listener){
			this._ee.once(event, listener);
		}
	}
});

module.exports = Task;