const path = require('path')
const {readFileSync, writeFileSync} = require('fs')
const productsFile = path.join(__dirname,'/data/productos')

var products
try {
	products = JSON.parse(readFileSync(productsFile))
} catch (e){
	products = []
}

module.exports = {

	listProducts: (req, res) => {
		res.send(products)
	},

	lista: (req, res) => {
		res.send(products)
	},

	postProducts: (req, res) => {
		const product = req.body
		console.log('agregado')
		products.push(product)
		writeFileSync(productsFile, JSON.stringify(products))
		res.send(product)
	},

	borrarProductos: (req, res) => {
		console.log('Lista borrada')
		products = []
		writeFileSync(productsFile, JSON.stringify(products))
		res.send(products)
	},

	actualizaProducto: (req, res) => {
		const registro = req.body
		var producto = registro.nombre
		var numeros = registro.numero
		var contador = registro.contador
		var lista = JSON.parse(readFileSync(productsFile))
		products = []
		writeFileSync(productsFile, JSON.stringify(products))

		for(var i=0 ; i<contador ; i++){
			var articulo = {
				nombre: lista[i].nombre,
				id: lista[i].id,
				cantidad: lista[i].cantidad }

			if(lista[i].nombre==producto){
				articulo.cantidad = numeros
			}
			products.push(articulo)

		}

		writeFileSync(productsFile, JSON.stringify(products))
		console.log('Lista actualizada ')

	}

}
