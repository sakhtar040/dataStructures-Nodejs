const capitalize = data => {
	const words = [];
	for (let char of data.split(" ")) {
		words.push(char[0].toUpperCase() + char.slice(1));
	}
	return words.join(" ");
};

console.log(`Capitalize: ${capitalize("software engineer")}`);
