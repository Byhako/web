// To get trees. Fork de directory-tre
const dirTree = require('./directory-tree-mod')
const fs = require('fs')
const path = require('path')
const dataDir = path.resolve(__dirname,'./padre/CAM53.csv')
const data = fs.readFileSync(dataDir, 'utf8').split('\r').map(i => i.split(','));

module.exports = {

	getFiles: (req, res) => {
		res.send(dirTree("padre"))
	},

	getData: (req, res) => {
		var start = parseInt(req.query.start) || 0;
		var end = start + ( parseInt(req.query.length) || 10 );

		res.send({
			recordsTotal: data.length,
			recordsFiltered: data.length,
			data: data.slice(start, end)
		});
	},

};
