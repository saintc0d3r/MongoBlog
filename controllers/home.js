/**
  The Home controller's definitions.
*/

module.exports = {
	"index": function(request, response){
		response.render('home/index', {});
	}
}