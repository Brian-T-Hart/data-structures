/*
    Queue
    * FIFO - first in first out
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null; // remove from the head
        this.tail = null; // add to tail
    }

    isEmpty() {
        return this.head == null;
    }// isEmpty

    peek() {
        if (this.head == null) {
            throw new Error('The queue is empty');
        }

        return this.head.data;
    }// peek

    add(data) {
        let node = new Node(data);

        if (this.tail != null) {
            this.tail.next = node;
        }

        this.tail = node;

        if (this.head == null) {
            this.head = node;
        }

    }// add

    remove() {
        if (this.head == null) {
            throw new Error('The queue is empty');
        }
        
        let data = this.head.data;
        this.head = this.head.next;

        if (this.head == null) {
            this.tail = null;
        }

        return data;

    }// remove


}

const queue = new Queue();

queue.add('Test 1');
queue.add('Test 2');
queue.add('Test 3');

queue.remove();

console.log(queue.peek());