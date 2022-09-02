/*
Linked List
    * Each node in the list has an element and a pointer to the next node
    * Has the following advantages over an array
        - Dynamic Size
        - Ease of insertion/deletion
    * Drawbacks
        - Random access isn't available. You have to start at the first node and traverse through until you find the desired node.
        - Extra memory space is required for a pointer for each element
        - 
*/

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addFirst(element) {
        let node = new Node(element);

        if (this.size == 0) {
            this.tail = node;
        }

        if (this.size > 0) {
            node.next = this.head;
        }

        this.head = node;
        this.size++;
    }//addFirst

    addLast(element) {
        let node = new Node(element);

        if (this.size == 0) {
            this.head = node;
        }

        if (this.size > 0) {
            let previous = this.tail;
            previous.next = node;
        }

        this.tail = node;
        this.size++;
    }//addLast

    contains(element) {
        let current = this.head;

        for (let i = 0; i < this.size; i++) {
            if (current.element === element) return true;
            current = current.next;
        }

        return false;
    }//contains

    deleteFirst() {
        if (this.size < 1) {
            return console.log('There is nothing to delete');
        }

        if (this.size === 1) {
            this.head = null;
            this.tail = null;
            this.size = 0;
            return;
        }

        this.head = this.head.next;
        this.size--;
    }//deleteFirst

    deleteLast() {
        if (this.size < 1) {
            return console.log('There is nothing to delete');
        }

        if (this.size === 1) {
            this.head = null;
            this.tail = null;
            this.size = 0;
            return;
        }

        let current = this.head;
        let next = this.head.next;

        //Find the second from last element
        for (let i = 0; i < this.size; i++) {
            if (next === this.tail) {
                current.next = null;
                this.tail = current;
                this.size--;
                break;
            }

            current = next;
            next = current.next;
        }
    }//deleteLast

    indexOf(element) {
        let current = this.head;

        for (let i = 0; i < this.size; i++) {
            if (current.element === element) return i;
            current = current.next;
        }

        return -1;
    }

}

let myList = new LinkedList();

for (let i = 1; i < 4; i++) {
    myList.addFirst(`element ${i}`);
}

console.log(myList.contains('element 6'));

for (let i = 4; i < 7; i++) {
    myList.addLast(`element ${i}`);
}

console.log(myList.contains('element 6'));
console.log(myList.indexOf('element 6'));

// myList.addFirst('one');
// myList.addFirst('two');
// myList.addFirst('three');
// myList.addLast('four');

// myList.deleteFirst();
// myList.deleteFirst();
// myList.deleteFirst();
// myList.deleteFirst();
// myList.deleteLast();
// myList.deleteLast();
// myList.deleteLast();
// myList.deleteLast();

console.log(myList);