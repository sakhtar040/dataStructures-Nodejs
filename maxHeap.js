class MaxHeap {
    constructor() {
        this.heap = []; //initial heap
    }

    getMinValue() {
        return this.heap[0];
    }

    parent(index) {
        return Math.floor((index)/2);
    }

    leftChild(index) {
        return index*2 + 1;
    }

    rightChild(index) {
        return index*2 + 2;
    }

    isLeaf(index) { //returns true if node has no child.
        return (index >= Math.floor(this.heap.length / 2) && index <= this.heap.length - 1);
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(element) {
        this.heap.push(element);
        let currentIndex = this.heap.length - 1;
        let parentIndex = this.parent(currentIndex);

        while(currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
            this.swap(parentIndex, currentIndex);
            currentIndex = parentIndex;
            parentIndex = this.parent(parentIndex);
        }
    }

    remove(index = 0) {
        /* this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.splice(this.heap.length - 1);
        // if the node at index has children
        if (!this.isLeaf(index)) {
            // get indices of children
            let leftChildIndex = this.leftChild(index);
            let rightChildIndex = this.rightChild(index);

            // start out largest index at parent index
            let largestIndex = index;

            // if the left child > parent
            if (this.heap[leftChildIndex] > this.heap[largestIndex]) {
                // reassign largest index to left child index
                largestIndex = leftChildIndex;
            }

            // if the right child > element at largest index (either parent or left child)
            if (this.heap[rightChildIndex] >= this.heap[largestIndex]) {
                // reassign largest index to right child index
                largestIndex = rightChildIndex;
            }

            // if the largest index is not the parent index
            if (largestIndex !== index) {
                // swap
                this.swap(index, largestIndex);
                // recursively move down the heap
                this.remove(largestIndex);
            }
        } */
        if(this.heap.length > 1) {
            this.heap[0] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1);

            if(this.heap.length == 2) {
                if(this.heap[1] < this.heap[2]) {
                    this.swap(1,2);
                }
                return this.heap[0];
            }

            let current = 0;
            let leftChildIndex = this.leftChild(current);
            let rightChildIndex = this.rightChild(current);

            while(this.heap[leftChildIndex] && this.heap[rightChildIndex] && (this.heap[current] <= this.heap[leftChildIndex] || this.heap[current] <= this.heap[rightChildIndex])) {
                if(this.heap[leftChildIndex] > this.heap[rightChildIndex]) {
                    this.swap(current, leftChildIndex);
                    current = leftChildIndex;
                } else {
                    this.swap(current, rightChildIndex);
                    current = rightChildIndex;
                }
                leftChildIndex = this.leftChild(current);
                rightChildIndex = this.rightChild(current);
                /* if(this.heap[rightChildIndex] == undefined && this.heap[leftChildIndex] < this.heap[current]) {
                    this.swap(current, leftChildIndex);
                } */
                if(this.heap[leftChildIndex] == undefined || this.heap[rightChildIndex] == undefined) {
                    break;
                }
            }
        } else if(this.heap.length == 1) {
            this.heap.splice(1,1);
        } else {
            return null;
        }
        return this.heap[0];
    }
}

const maxHeapInstance = new MaxHeap();

maxHeapInstance.insert(35)
console.log(maxHeapInstance.heap);
maxHeapInstance.insert(33)
console.log(maxHeapInstance.heap);
maxHeapInstance.insert(42)
console.log(maxHeapInstance.heap);
maxHeapInstance.insert(10)
console.log(maxHeapInstance.heap);
maxHeapInstance.insert(14)
console.log(maxHeapInstance.heap);
maxHeapInstance.insert(19)
console.log(maxHeapInstance.heap);
maxHeapInstance.insert(27)
console.log(maxHeapInstance.heap);
maxHeapInstance.insert(44)
console.log(maxHeapInstance.heap);
maxHeapInstance.insert(26)
console.log(maxHeapInstance.heap);
maxHeapInstance.insert(31)
console.log(maxHeapInstance.heap);

/* console.log(maxHeapInstance.getMinValue());
maxHeapInstance.remove()
console.log(maxHeapInstance.heap);
console.log(maxHeapInstance.getMinValue());
maxHeapInstance.remove()
console.log(maxHeapInstance.heap);
console.log(maxHeapInstance.getMinValue()); */

