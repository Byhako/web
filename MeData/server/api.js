// To get trees. Fork de directory-tre
const dirTree = require('./directory-tree-mod');

module.exports = {

	getFiles: (req, res) => {
		const filesTree = dirTree("padre");
		res.send(filesTree)
	},
};
