// Initialise Express
var app = require('express')();

// Setup Consolidate & Swig as express's view engine
var consolidate = require('consolidate');
app.engine('html', consolidate.swig);
app.set('view engine', 'html');

// Set view's directory
app.set('views', __dirname + '/views');

// Wiring routes - 
// TODO: Move this into separated module/source code
var routes = require('./config/routes');
console.log("[DEBUG] - routes = ");
console.dir(routes);

var i = 1;
for (var route in routes){
	console.log("[DEBUG] - route#"+i+": ");
	console.dir(route);

	var endpoint = routes[route];
	console.log("[DEBUG] - Endpoint '/':");
	console.dir(endpoint);
	var controller_name = endpoint.controller;
	var action = require('./controllers/'+controller_name)[endpoint.action]
	console.log("[DEBUG] - Action '"+endpoint.action+"' =");
	console.dir(action);
	var http_method = endpoint.method;
	console.log("[DEBUG] - Http Method = "+http_method);

	switch(http_method){
		case 'GET':
			app.get(endpoint, action);
			break;
	}
	i++;
}

var express_port = require('./config/server').express.port;
app.listen(express_port);
console.log("[INFO] - Application is started at port "+express_port+" ...");