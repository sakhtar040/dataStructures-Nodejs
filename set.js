class Set {
	constructor() {
		let collection = [];

		this.has = item => {
			return collection.indexOf(item) !== -1;
		};

		this.values = () => {
			return collection;
		};

		this.add = item => {
			if (!this.has(item)) {
				collection.push(item);
				return true;
			}
			return false;
		};

		this.remove = item => {
			if (this.has(item)) {
				collection.splice(collection.indexOf(item), 1);
				return true;
			}
			return false;
		};

		this.size = () => {
			return collection.length;
		};

		this.union = otherSet => {
			const unionSet = new Set();
			const firstSet = this.values();
			const secondSet = otherSet.values();

			firstSet.forEach(e => {
				unionSet.add(e);
			});

			secondSet.forEach(e => {
				unionSet.add(e);
			});

			return unionSet;
		};

		this.interSection = otherSet => {
			const intersectionSet = new Set();
			const firstSet = this.values();

			firstSet.forEach(e => {
				if (otherSet.has(e)) {
					intersectionSet.add(e);
				}
			});

			return intersectionSet;
		};

		this.difference = otherSet => {
			const differenceSet = new Set();
			const firstSet = this.values();

			firstSet.forEach(e => {
				if (!otherSet.has(e)) {
					differenceSet.add(e);
				}
			});

			return differenceSet;
		};

		this.subset = otherSet => {
			const firstSet = this.values();
			return firstSet.every(value => otherSet.has(value));
		};
	}
}

/* function Set() {
    let collection = [];

    this.has = item => {
        return collection.indexOf(item) !== -1;
    };

    this.values = () => {
        return collection;
    };

    this.add = item => {
        if (!this.has(item)) {
            collection.push(item);
            return true;
        }
        return false;
    };

    this.remove = item => {
        if (this.has(item)) {
            collection.splice(collection.indexOf(item), 1);
            return true;
        }
        return false;
    };

    this.size = () => {
        return collection.length();
    };

    this.union = otherSet => {
        const unionSet = new Set();
        const firstSet = this.values();
        const secondSet = otherSet.values();

        firstSet.forEach(e => {
            unionSet.add(e);
        });

        secondSet.forEach(e => {
            unionSet.add(e);
        });

        return unionSet;
    };

    this.interSection = otherSet => {
        const intersectionSet = new Set();
        const firstSet = this.values();

        firstSet.forEach(e => {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });

        return intersectionSet;
    };

    this.difference = otherSet => {
        const differenceSet = new Set();
        const firstSet = this.values();

        firstSet.forEach(e => {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });

        return differenceSet;
    };

    this.subset = otherSet => {
        const firstSet = this.values();
        return firstSet.every(value => otherSet.has(value));
    };
} */

var setA = new Set();
var setB = new Set();

setA.add(1);
setB.add(1);
setA.add(2);
setB.add(2);
setB.add(3);
setB.add(4);
setA.add(3);
setB.add(5);

console.log(setA.subset(setB));
console.log(setB.interSection(setA).values());
console.log(setB.difference(setA).values());
