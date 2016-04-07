var fs = require('fs');

module.exports = function (dir, ext, callback) {
	fs.readdir(dir, function(err, contents) {
		var output = [];
		if (err) {
			return callback(err)
		} else {
			for (i=0;i<contents.length;i++) {
				if (contents[i].includes("." + ext)) {
					output.push(contents[i]);
				}
			};
			callback(null, output);
		};
	});
}