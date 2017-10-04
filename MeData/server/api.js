// To get trees. Fork de directory-tre
const dirTree = require('./directory-tree-mod');
const filesTree = dirTree("padre");
console.log(filesTree);
module.exports = {

	getFiles: (req, res) => {
		res.send(filesTree)
	},
};
