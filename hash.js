const hash = (string, max) => {
	var hash = 0;
	for (var i = 0; i < string.length; i++) {
		hash += string.charCodeAt(i);
	}
	return hash % max;
};

const hashTable = function() {
	let storage = [];
	const storageLimit = 4;

	this.print = () => {
		console.log(storage);
	};

	this.add = (key, value) => {
		var index = hash(key, storageLimit);
		if (storage[index] == undefined) {
			storage[index] = [[key, value]];
		} else {
			var inserted = false;
			for (var i = 0; i < storage[index].length; i++) {
				if (storage[index][i][0] === key) {
					storage[index][i][1] = value;
					inserted = true;
				}
			}
			if (inserted == false) {
				storage[index].push([key, value]);
			}
		}
	};

	this.remove = key => {
		var index = hash(key, storageLimit);
		if (storage[index].length === 1 && storage[index][0][0] === key) {
			delete storage[index];
		} else {
			for (var i = 0; i < storage[index].length; i++) {
				if (storage[index][i][0] === key) {
					delete storage[index][i];
				}
			}
		}
	};

	this.lookup = key => {
		var index = hash(key, storageLimit);
		if (storage[index] === undefined) {
			return undefined;
		} else {
			for (var i = 0; i < storage[index].length; i++) {
				if (storage[index][i][0] === key) {
					return storage[index][i][1];
				}
			}
		}
	};
};

console.log(hash("beau", 10));

const ht = new hashTable();
ht.add("shahbaz", "person");
ht.add("akhtar", "person");
ht.add("tom", "cat");
ht.add("browny", "dog");
console.log(ht.lookup("shahbaz"));
ht.print();
