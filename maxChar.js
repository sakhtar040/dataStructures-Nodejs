const maxCharacter = data => {
	const chars = {};
	var max = 0;
	var maxChar = "";

	for (let char of data) {
		if (!chars[char]) {
			chars[char] = 1;
		} else {
			chars[char]++;
		}
	}

	for (let char in chars) {
		if (chars[char] > max) {
			max = chars[char];
			maxChar = char;
		}
	}

	return maxChar;
};

console.log(
	`Maximum Character in string: ${maxCharacter("accccabbbaggggajjjjjjjjjj")}`
);
