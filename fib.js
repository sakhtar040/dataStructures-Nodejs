//Memoized 
const fib = (n, dic = {}) => {
	if (n in dic) return dic[n];
	if (n === 1 || n === 2) return 1;
	dic[n] = fib(n - 1, dic) + fib(n - 2, dic);
	return dic[n];
};

console.log(fib(60));
console.log(fib(600));
console.log(fib(6000));


//Bottom Up Approach
const fibo = (n, dic = []) => {
	dic[1] = 1;
	dic[2] = 1;
	for(let i=3; i<= n; i++) {
		dic[i] = dic[i-1] + dic[i-2];
	}
	return dic[n];
}

console.log(fibo(60));
console.log(fibo(600));
console.log(fibo(6000));
console.log(fibo(60000));
console.log(fibo(600000)); 