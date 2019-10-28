const sol1 = data => {
	return data
		.split("")
		.reverse()
		.join("");
};

const sol2 = data => {
	var output = "";
	/* for (var i = data.length - 1; i >= 0; i--) {
		output = output + data[i];
    } */

	for (let character of data) {
		output = character + output;
	}
	return output;
};

const sol3 = data => {
	return data.split("").reduce((rev, char) => char + rev, "");
};

console.log(`Solution 1: ${sol1("shahbaz")}`);
console.log(`Solution 2: ${sol2("shahbaz")}`);
console.log(`Solution 3: ${sol3("shahbaz")}`);
