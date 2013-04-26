var liga = require('path');

module.exports = function(grunt) {

	grunt.initConfig({
		express: {
			custom: {
				options: {
					port: 3000,
					server: liga.resolve('./app/express')
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-express');
	grunt.registerTask('default', ['express', 'express-keepalive']);

};
