const LinkedList = function() {
	var length = 0;
	var head = null;

	const Node = function(element) {
		this.element = element;
		this.next = null;
	};

	this.size = function() {
		return length;
	};

	this.add = function(element) {
		const node = new Node(element);
		if (head == null) {
			head = node;
		} else {
			var currentNode = head;
			while (currentNode.next) {
				currentNode = currentNode.next;
			}
			currentNode.next = node;
		}
		length++;
	};

	this.remove = function(element) {
		var currentNode = head;
		var previousNode;
		if (currentNode == null) {
			return null;
		}
		if (currentNode.element == element) {
			head = currentNode.next;
		} else {
			while (currentNode.element != element) {
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			previousNode.next = currentNode.next;
		}
		length--;
	};

	this.isEmpty = function() {
		return length === 0;
	};

	this.indexOf = function(element) {
		var currentNode = head;
		var index = -1;

		if (currentNode == null) {
			return null;
		} else {
			while (currentNode) {
				index++;
				if (currentNode.element === element) {
					return index;
				}
				currentNode = currentNode.next;
			}
			return -1;
		}
	};

	this.elementAt = function(index) {
		var currentNode = head;
		var count = 0;
		if (currentNode == null) {
			return null;
		} else {
			while (count < index) {
				count++;
				currentNode = currentNode.next;
			}
			return currentNode.element;
		}
	};

	this.addAt = function(index, element) {
		const node = new Node(element);

		var currentNode = head;
		var previousNode;
		var currentIndex = 0;

		if (index > length) {
			return false;
		}

		if (index == 0) {
			currentNode = node.next;
			head = node;
		} else {
			while (currentIndex < index) {
				currentIndex++;
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			previousNode.next = node;
			node.next = currentNode;
		}
		length++;
	};

	this.removeAt = function(index) {
		var currentNode = head;
		var previousNode;
		var currentIndex = 0;

		if (index < 0 || index >= length) {
			return null;
		}

		if (index == 0) {
			head = currentNode.next;
		} else {
			while (currentIndex < index) {
				currentIndex++;
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			previousNode.next = currentNode.next;
		}
		length--;
		return currentNode.element;
	};
};

const ll = new LinkedList();
ll.add("Shahbaz");
ll.add("akhtar");
ll.add("rdx");
ll.add("tabish");
ll.add("lion");
console.log(ll.size());
console.log(ll.removeAt(3));
ll.addAt(3, "tabishAkhtar");
console.log(ll.elementAt(3));
