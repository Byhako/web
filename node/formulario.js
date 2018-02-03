var http = require('http');
var fs = require('fs');

http.createServer((req, res)=>{

  // Busca si en la url de la peticion esta la cadena favicon.ico
  // y hace que no pase esta informacion en lo que sigue del programa.
  // (Hay que entender esto!)
  if(req.url.indexOf("favicon.ico") > 0){return;}

  fs.readFile('./formulario.html',(err, html)=>{
    var htmlString = html.toString();
    var nombre = "Selene";
    var dicParametros = {};
    // patron regular para encontrar valores entre llaves y retornarlo
    // como un arreglo.
    var variable = htmlString.match(/[^\{\}]+(?=\})/g);
    console.log("variable: ",variable);
    
    // ? -> separador parametros de la url
    if(req.url.indexOf("?") > 0){
      // /?nombre=Selene -> ['/', 'nombre=Selene']
      // [path, parametros]
      var urlData = req.url.split("?");

      // & -> separador de los distintos parametros
      var parametros = urlData[1].split("&");

      /*
      Ejemplo:
      https://www.youtube.com/watch?v=XHqX7VBqxos&index=6&list=PLf3Ulvd7
      req.url -> /watch?v=XHqX7VBqxos&index=6&list=PLf3Ulvd7
      urlData -> ['/watch','v=XHqX7VBqxos&index=6&list=PLf3Ulvd7']
      parametros -> ['v=XHqX7VBqxos','index=6','list=PLf3Ulvd7']
      */
    };

    for (let i=0 ; i<parametros.length ; i++) {
      var parametro = parametros[i];
      var valorParametro = parametro.split("=");
      dicParametros[valorParametro[0]] = valorParametro[1];
    };

    for (let i=0 ; i<variable.length ; i++) {
      htmlString =htmlString.replace("{"+variable[i]+"}", dicParametros[variable[i]]);
    };

    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlString);
    res.end();
  });
}).listen(8080);
