const findVowels = data => {
	const vowels = ["a", "e", "i", "o", "u"];
	var count = 0;

	for (let char of data) {
		if (vowels.includes(char)) {
			count++;
		}
	}
	return count;
};

console.log(`Vowels: ${findVowels("shahbaz")}`);
console.log(`Vowels: ${findVowels("hulala")}`);
console.log(`Vowels: ${findVowels("tabish")}`);
