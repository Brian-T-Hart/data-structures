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
        return node;
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
        return node;
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
            return undefined;
        }

        let deleted = this.head;

        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.size--;
        return deleted;
    }//deleteFirst

    deleteLast() {
        if (this.size < 1) {
            return undefined;
        }

        let deleted = this.tail;

        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let current = this.head;
            let next = this.head.next;

            for (let i = 0; i < this.size; i++) {
                if (next === this.tail) {
                    current.next = null;
                    this.tail = current;
                    break;
                }//if

                current = next;
                next = current.next;
            }//for
        }//if

        this.size--;
        return deleted;
    }//deleteLast

    indexOf(element) {
        let current = this.head;

        for (let i = 0; i < this.size; i++) {
            if (current.element === element) return i;
            current = current.next;
        }

        return -1;
    }//indexOf
}//LinkedList