// file:///home/<<whoami>>/.nvm/versions/node/v6.9.5/lib/node_modules/learnyounode/node_apidoc/path.html
// file:///home/<<whoami>>/.nvm/versions/node/v6.9.5/lib/node_modules/learnyounode/node_apidoc/fs.html

var fs = require('fs');

fs.readdir(process.argv[2], function(err, list) {
	for(var i=0;i<list.length;i++) {
		if(list[i].split('.')[1] === process.argv[3])
			console.log(list[i]);
	}
});


/* var fs = require('fs')
 var path = require('path')

 var folder = process.argv[2]
 var ext = '.' + process.argv[3]

 fs.readdir(folder, function(err, files) {
     if (err) return console.error(err)
     files.forEach(function(file) {
         if (path.extname(file) === ext) {
             console.log(file)
         }
     })
 })*/