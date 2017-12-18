var http = require('http')
var url  = require('url')

function iniciar(route){
	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname
		console.log('Petition for ' + pathname + ' received.')

		route(pathname)

		response.writeHead(200, {'content-Type':'text/html'})
		response.write('Hello Ruben')
		response.end()
	}

	http.createServer(onRequest).listen(8888)
	console.log('Running Server...\n')
}

exports.iniciar = iniciar
