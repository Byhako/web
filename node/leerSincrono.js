var http = require('http');
var fs = require('fs');

// Leo documento html de manera sincrona
var html = fs.readFileSync("./index.html");

http.createServer(function(req, res){
  res.write(html);
  res.end();
}).listen(8000);

console.log('Listening in port 8000');