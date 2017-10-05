// To get trees. Fork de directory-tre
const dirTree = require('./directory-tree-mod')
const fs = require('fs')
const path = require('path')
const dataDir = path.resolve(__dirname,'./padre/CAM53.csv')

module.exports = {

	getFiles: (req, res) => {
		res.send(dirTree("padre"))
	},

	getData: (req, res) => {
		var table = fs.readFileSync(dataDir, 'utf8').split('\r').map(i => i.split(','))
		res.send(table)
	},

};
