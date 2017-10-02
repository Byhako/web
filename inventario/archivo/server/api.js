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
		console.log('Lista cargada');
	},

	postProducts: (req, res) => {
		const product = req.body
		products.push(product)
		writeFileSync(productsFile, JSON.stringify(products))
		res.send(product)
		console.log('Producto agregado')
	},

	borrarProductos: (req, res) => {
		products = []
		writeFileSync(productsFile, JSON.stringify(products))
		res.send(products)
		console.log('Lista borrada')
	},

	actualizaProducto: (req, res) => {

		const registro = req.body
		var producto = registro.nombre
		var numeros = registro.numero
		var contador = products.length
		var lista = JSON.parse(readFileSync(productsFile))

		products = []

		for(var i=0 ; i<contador ; i++){
			var articulo = {
				nombre: lista[i].nombre,
				id: lista[i].id,
				cantidad: lista[i].cantidad }
			if(articulo.nombre==producto){
				articulo.cantidad = numeros
			}
			products.push(articulo)
		}

		writeFileSync(productsFile, JSON.stringify(products))
		res.send(products)
		console.log('Lista actualizada')
	}

}
