var fs = require('fs');

function findLength(array) {
	var contents = fs.readFileSync(array[2]).toString().split("\n");
	return contents.length - 1
}

console.log(findLength(process.argv));