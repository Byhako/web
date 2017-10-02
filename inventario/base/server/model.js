const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productSchema = new Schema({
	name: String,
	descripcion: String,
	price: Number,
	qty: Number,
	createAt: Date,
	updateAt: Date
})
const Produc = mongoose.model('Product', productSchema)

mongoose.connect('mongodb://localhost/inventario', {useMongoClient:true, promiseLibrary:global.Promise})

module.exports = {

	listProducts: (cb) =>{
		Product.find(cb)
	},

	getproducts: () =>{

	},

	postProducts: (data, cb) =>{
		let product = new Product(data)
		product.save(cb)
	},


}
