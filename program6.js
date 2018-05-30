var mymodule = require('./makeItModular');
var dir = process.argv[2];
var fileName = process.argv[3];

var callback = function(err, list) {
	if (err) throw err;
	else {
		list.forEach(function(file) {
			console.log(file);
		})
	}
};

var bindedDirectory = mymodule.bind(null, dir);
var bindedFileName = bindedDirectory.bind(null, fileName);
bindedFileName(callback);