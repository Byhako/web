const model = require('./model')

module.exports = {

	listProducts: (req, res) => {
		model.listProducts((err, products)=>{
			res.send(products)
		})
		console.log('Lista cargada');
	},

	postProducts: (req, res) => {
		const product = req.body
		model.postProducts(product, (err,p)=>{
			res.send(p)
		})
		console.log('Producto agregado')
	},


	actualizaProducto: (req, res) => {

		console.log('Lista actualizada')
	}

}
