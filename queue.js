class Queue {
	constructor() {
		let collection = [];

		this.print = () => {
			return collection;
		};

		this.enqueue = item => {
			return collection.push(item);
		};

		this.dequeue = () => {
			return collection.shift();
		};

		this.front = () => {
			return collection[0];
		};

		this.size = () => {
			return collection.length;
		};

		this.isEmpty = () => {
			return collection.length === 0;
		};
	}
}

class PriorityQueue {
	constructor() {
		let collection = [];

		this.print = () => {
			return collection;
		};

		this.enqueue = item => {
			if (this.isEmpty()) {
				return collection.push(item);
			} else {
				var added = false;
				for (var i = 0; i < collection.length; i++) {
					if (item[1] < collection[i][1]) {
						collection.splice(i, 0, item);
						added = true;
						break;
					}
				}
				if (!added) {
					return collection.push(item);
				}
			}
		};

		this.dequeue = () => {
			return collection.shift();
		};

		this.front = () => {
			return collection[0];
		};

		this.size = () => {
			return collection.length;
		};

		this.isEmpty = () => {
			return collection.length === 0;
		};
	}
}

var myQueue = new Queue();
myQueue.enqueue("Shahbaz");
myQueue.enqueue("Akhtar");
console.log(myQueue.print());
console.log(myQueue.size());
myQueue.dequeue();
console.log(myQueue.front());

var prQueue = new PriorityQueue();
prQueue.enqueue(["shahbaz", 2]);
prQueue.enqueue(["akhtar", 3]);
prQueue.enqueue(["rdx", 1]);
prQueue.enqueue([2, 2]);
console.log(prQueue.print());
prQueue.dequeue();
console.log(prQueue.front());
