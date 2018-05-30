var bl = require('bl');
var http = require('http');

var callback = function(response) {
	response.setEncoding('utf8');
	response.pipe(bl(function (err, data) {
		if(err) throw err;
		else {
			console.log(data.toString().length);
			console.log(data.toString());
		}
	})) 
};

http.get(process.argv[2], callback);