console.log(newoutput(process.argv));

function newoutput(array) {
	/*var output = [];
	output.push('node');
	output.push(array[1]);*/
	var sum = 0;
	for (i = 2; i < array.length;i++) {
		sum += +array[i];
	};
	/* output.push(sum); */
	return sum
}