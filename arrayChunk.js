const arrayChunk = (data, size) => {
	const newArray = [];
	/* for (let element in data) {
		const last = newArray[newArray.length - 1];

		if (!last || last.length === size) {
			newArray.push([element]);
		} else {
			last.push(element);
		}
    } */

	var index = 0;
	while (index < data.length) {
		newArray.push(data.slice(index, index + size));
		index = index + size;
	}
	return newArray;
};

console.log(arrayChunk([1, 2, 3, 4, 5, 6], 2));
