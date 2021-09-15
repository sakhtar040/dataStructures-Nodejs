class MinHeap {
    constructor() {
        //initial heap
        this.heap = [];
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

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(element) {
        this.heap.push(element);
        let currentIndex = this.heap.length - 1;
        let parentIndex = this.parent(currentIndex);

        while(currentIndex > 0 && this.heap[parentIndex] > this.heap[currentIndex]) {
            this.swap(parentIndex, currentIndex);
            currentIndex = parentIndex;
            parentIndex = this.parent(parentIndex);
        }
    }

    remove() {
        if(this.heap.length > 1) {
            this.heap[0] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1);

            if(this.heap.length == 2) {
                if(this.heap[1] > this.heap[2]) {
                    this.swap(1,2);
                }
                return this.heap[0];
            }

            let current = 0;
            let leftChildIndex = this.leftChild(current);
            let rightChildIndex = this.rightChild(current);

            while(this.heap[leftChildIndex] && this.heap[rightChildIndex] && (this.heap[current] >= this.heap[leftChildIndex] || this.heap[current] >= this.heap[rightChildIndex])) {
                if(this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
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

const minHeapInstance = new MinHeap();

minHeapInstance.insert(35)
console.log(minHeapInstance.heap);
minHeapInstance.insert(33)
console.log(minHeapInstance.heap);
minHeapInstance.insert(42)
console.log(minHeapInstance.heap);
minHeapInstance.insert(10)
console.log(minHeapInstance.heap);
minHeapInstance.insert(14)
console.log(minHeapInstance.heap);
minHeapInstance.insert(19)
console.log(minHeapInstance.heap);
minHeapInstance.insert(27)
console.log(minHeapInstance.heap);
minHeapInstance.insert(44)
console.log(minHeapInstance.heap);
minHeapInstance.insert(26)
console.log(minHeapInstance.heap);
minHeapInstance.insert(31)
console.log(minHeapInstance.heap);

/* console.log(minHeapInstance.getMinValue());
minHeapInstance.remove()
console.log(minHeapInstance.heap);
console.log(minHeapInstance.getMinValue());
minHeapInstance.remove()
console.log(minHeapInstance.heap);
console.log(minHeapInstance.getMinValue()); */