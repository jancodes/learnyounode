var fs = require('fs');

fs.readdir(process.argv[2], function(err, contents) {
	if(!err) {
		for (i=0;i<contents.length;i++) {
			if (contents[i].includes("." + process.argv[3])) {
				console.log(contents[i]);
			}
		};
	};
});