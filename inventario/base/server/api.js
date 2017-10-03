const model = require('./model')

module.exports = {
//---------------------------------------------------------------
	getProducto: (req, res) => {
		model.getProductos((err, products)=>{
			res.send(products)
		})
		console.log('Lista cargada');
	},
	//---------------------------------------------------------------
	postProducto: (req, res) => {
		const product = req.body
		model.postProductos(product, (err,p)=>{
			res.send(p)
		})
		console.log('Producto agregado')
	},
	//---------------------------------------------------------------
	putProducto: (req, res) => {
		const registro = req.body
		model.putProductos(registro, (err,p)=>{
			res.send(p)
		})
		console.log('Lista actualizada')
	},
	//---------------------------------------------------------------
	deleteProducto:(req, res) => {
		model.deleteProductos()
		console.log('Lista borrada')
	}
	//---------------------------------------------------------------
}
