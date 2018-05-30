var net = require('net');
var portNumber = process.argv[2];
var strftime = require('strftime');


var listener = function(socket) {
	socket.write(strftime('%Y-%m-%d %H:%M'));
	socket.end('\n');
};

var server = net.createServer(listener);
server.listen(portNumber);