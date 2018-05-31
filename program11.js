var http = require('http');
var fs = require('fs');

var callback = function(req, res) {
	fs.createReadStream(process.argv[3], function(err, data) {

	});

};

var server = http.createServer(callback);
server.listen(process.argv[2]);  
