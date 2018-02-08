var http = require('http');
var fs = require('fs');

http.createServer((req, res)=>{
  fs.readFile('./renderVars.html',(err, html)=>{
    var htmlString = html.toString();
    var nombre = "Selene";
    // patron regular para encontrar valores entre llaves y retornarlo
    // como un arreglo.
    var variable = htmlString.match(/[^\{\}]+(?=\})/g);
    console.log("variable: ",variable);

    for (let i=0 ; i<variable.length ; i++) {
      var value = eval(variable[i]);

      // sustituimos en htmlString
      htmlString =htmlString.replace("{"+variable[i]+"}", value);
    };

    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlString);
    res.end();
  });
}).listen(8080);
