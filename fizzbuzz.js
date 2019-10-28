/*console log the numbers from 1 to n. But for multiples of three print 'FIZZ' instead of the number and for the multiples of five print 'BUZZ'. For both print 'FIZZBUZZ*/

const fizzbuzz = num => {
	for (var i = 1; i <= num; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			console.log("FIZZ-BUZZ");
		} else if (i % 3 == 0) {
			console.log("FIZZ");
		} else if (i % 5 == 0) {
			console.log("BUZZ");
		} else {
			console.log(i);
		}
	}
};

fizzbuzz(30);
