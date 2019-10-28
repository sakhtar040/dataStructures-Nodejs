/*Two string uses same character with same number of chatracters*/

const anagrams = (data1, data2) => {
	const char1 = buildCharMap(data1);
	const char2 = buildCharMap(data2);

	if (Object.keys(char1).length !== Object.keys(char2).length) {
		return false;
	}

	for (let char in char1) {
		if (char1[char] !== char2[char]) {
			return false;
		}
	}

	return true;
};

const buildCharMap = str => {
	const charmap = {};

	for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
		charmap[char] = charmap[char] + 1 || 1;
	}
	return charmap;
};

//another solution

const anagramS = (data1, data2) => {
	return cleanString(data1) === cleanString(data2);
};

const cleanString = str => {
	return str
		.replace(/[^\w]/g, "")
		.toLowerCase()
		.split("")
		.sort()
		.join("");
};

console.log(`Anagrams: ${anagramS("rail safety", "fairy tales")}`);
