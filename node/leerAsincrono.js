var http = require('http');
var fs = require('fs');

// Leo documento html de manera asincrona
// necesitamos un callback, funcion que se ejecuta
// despues de hacer algo.

/*
fs.readFile("./index.html",(err, html)=>{
  http.createServer(function(req, res){
    res.write(html);
    res.end();
  }).listen(8000);
});
*/

// De esta otra manera, no se tiene que recargar el servidor
// cuando cambia el html, basta con actualizar el navegador
// para ver los cambios

http.createServer(function(req, res){
  fs.readFile("./index.html",(err, html)=>{
    //Encabezado
    res.writeHead(200, {"Content-Type":"Text/html"});

    // Escribimos el html
    res.write(html);
    //Pasamos un json a cadena.
    res.write(JSON.stringify({Nombre:"Selene", Apellido:"Night"}));

    res.end();
  });
}).listen(8080);

console.log('Listening in port 8080');