var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents) {
	if(err) {
		console.log(0);
	} else {
		//console.log(fileContents);
		console.log(fileContents.split('\n').length-1);
	}
});