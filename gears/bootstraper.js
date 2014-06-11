/**
Initialise express, mongoose and run the express app on pre-defined port
*/

exports.run = function(){
	// Initialise Express
	var app = require('express')();

	// Setup Consolidate & Swig as express's view engine
	var consolidate = require('consolidate');
	app.engine('html', consolidate.swig);
	app.set('view engine', 'html');

	// Set view's directory
	app.set('views', __dirname + '/../views');

	// Wiring routes - 
	require('./routes_resolver').resolve(app);

	// Run the express server
	var express_port = require('../config/server').express.port;
	app.listen(express_port);
	console.log("[INFO] - Application is started at port "+express_port+" ...");
}