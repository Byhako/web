'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.text())
//curl -XPOST -H 'content-Type: text/plain' -d 'ruben' localhost:8080
app.use(bodyParser.urlencoded({extended: false})) //para formularios
//curl -XPOST -d 'Usuario=ruben' localhost:8080
app.use(bodyParser.json())


app.get('/', (req, res) =>{
	res.send('hola mundo')
})

app.post('/', (req, res) =>{
	res.send(req.body)
})

app.listen(8080, function(){
	console.log('Server run in port 8080');
})


//Si no hay content-Type curl envia por defecto un formulario tipo json.