// file:///home/avinash/.nvm/versions/node/v6.9.5/lib/node_modules/learnyounode/node_apidoc/http.html

var http = require('http');
var callback = function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
        console.log(data);
    })
};
http.get(process.argv[2], callback)
.on('error', console.error);