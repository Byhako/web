var http = require('http');

// recibe una funcion como parametro
var server = http.createServer(function(req, res){
  console.log('Peticion recibida.');
  //cerramos la coneccion
  res.end('Hola Selene.'); //Se imprime en navegador.
});

// Puerto
server.listen(8000);