const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
	nombre: String,
	cantidad: Number
})

const producto = mongoose.model('producto', productSchema)

mongoose.connect('mongodb://localhost/inventario',{useMongoClient:true,promiseLibrary:global.Promise})

module.exports = {

	getProductos: (cb) =>{
		producto.find(cb)
	},

	postProductos: (data, cb) =>{
		let articulo = new producto(data)
		articulo.save(cb)
	},

	putProductos: (data) =>{
		let numeros = parseInt(data.numero)
		let nombre = { nombre: data.nombre }
		producto.findOneAndUpdate(nombre,{$set:{cantidad:numeros}},
			{returnNewDocument:true},function(err){
		})
	},

	deleteProductos: () =>{
		producto.remove({},function(err){})
	}
}
