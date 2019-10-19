const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.maxSize = maxSize;
		this.heap = new MaxHeap();
		//this.data = [];
	}

	push(data, priority) {
		if (priority > this.maxSize) {
			this.heap.push(data, priority);
		}
		else {
			throw new Error();
		 }
	}

	shift() {
		this.heap.pop();
	}

	size() {
		return this.heap.length;
	}

	isEmpty() {
		return this.heap.length === 0 ? true : false;
	}
}

module.exports = PriorityQueue;
