class Stack {
	constructor() {
		this.count = 0;
		this.storage = {};

		this.push = item => {
			this.storage[this.count] = item;
			this.count++;
			return this.storage;
		};

		this.pop = () => {
			if (this.count == 0) {
				return "Empty";
			}

			this.count--;
			var result = this.storage[this.count];
			delete this.storage[this.count];
			return result;
		};

		this.peek = () => {
			return this.storage[this.count - 1];
		};

		this.size = () => {
			return this.count;
		};
	}
}

/* function Stack() {
	this.count = 0;
	this.storage = {};

	this.push = item => {
		this.storage[this.count] = item;
		this.count++;
		return this.storage;
	};

	this.pop = () => {
		if (this.count == 0) {
			return "Empty";
		}

		this.count--;
		var result = this.storage[this.count];
		delete this.storage[this.count];
		return result;
	};

	this.peek = () => {
		return this.storage[this.count - 1];
	};

	this.size = () => {
		return this.count;
	};
} */

var myStack = new Stack();

myStack.push(3);
myStack.push(4);
console.log(`Stack: ${JSON.stringify(myStack.storage)}`);
console.log(`Peek: ${myStack.peek()}`);
console.log(`Size: ${myStack.size()}`);
console.log(`Pop: ${myStack.pop()}`);
console.log(`Size: ${myStack.size()}`);
console.log(`Peek: ${myStack.peek()}`);
console.log(`Stack: ${JSON.stringify(myStack.storage)}`);
