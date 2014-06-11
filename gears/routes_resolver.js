/**
	Register pre-defined routes into the express app instance
*/
exports.resolve = function(app){
	var routes = require('../config/routes');

	for (var route in routes){
		var endpoint = routes[route];
		var controller_name = endpoint.controller;
		var action = require('../controllers/'+controller_name)[endpoint.action]
		var http_method = endpoint.method;

		switch(http_method){
			case 'GET':
				app.get(route, action);
				break;
			case 'POST':
				break;
			case 'PUT':
				break;
			case 'DELETE':
				break;
		}
	}
}