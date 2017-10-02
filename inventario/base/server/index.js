'use strict'

const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const dataDir = path.join(__dirname, 'data')
const uiDir = path.resolve(__dirname, '../ui')

app.use(bodyParser.urlencoded({extended: false})) //para formularios
app.use(bodyParser.json())
app.use('/ui', express.static(uiDir))

const api = require('./api')

app.get('/api/products', api.listProducts)
app.post('/api/products', api.postProducts)
app.put('/api/products', api.actualizaProducto)
//app.delete('/api/products', api.borrarProductos)

app.listen(8080, function(){
	console.log('Server run in port 8080');
})


/*
//Si no hay content-Type curl envia por defecto un formulario tipo json.
app.use(bodyParser.text())
//curl -XPOST -H 'content-Type: text/plain' -d 'ruben' localhost:8080
app.use(bodyParser.urlencoded({extended: false})) //para formularios
//curl -XPOST -d 'Usuario=ruben' localhost:8080
*/
