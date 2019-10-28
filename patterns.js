const pattern = num => {
	for (var i = 0; i < num; i++) {
		let str = "";
		for (var j = 0; j < num; j++) {
			if (j <= i) {
				str += "#";
			} else {
				str += " ";
			}
		}
		console.log(str);
	}
};

const pyramid = num => {
	let midPoint = Math.floor((2 * num - 1) / 2);
	for (let i = 0; i < num; i++) {
		let level = "";
		for (let j = 0; j < 2 * num - 1; j++) {
			if (midPoint - i <= j && midPoint + i >= j) {
				level += "#";
			} else {
				level += " ";
			}
		}
		console.log(level);
	}
};

pattern(5);
pyramid(5);
