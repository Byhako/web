'use strict'

const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const uiDir = path.resolve(__dirname, '../ui')
const api = require('./api')

app.use(bodyParser.urlencoded({extended: false})) //para formularios
app.use(bodyParser.json())
app.use('/ui', express.static(uiDir))

app.get('/api/products', api.getProducto)
app.post('/api/products', api.postProducto)
app.put('/api/products', api.putProducto)
app.delete('/api/products', api.deleteProducto)

app.listen(8080, function(){
	console.log('Server run in port 8080');
})
