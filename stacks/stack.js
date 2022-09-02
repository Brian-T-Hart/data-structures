/*
    Stack
    * LIFO - last in - first out
*/

class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    isEmpty() {
        return this.count == 0;
    }

    peek() {
        return this.items[this.count - 1];
    }

    pop() {
        if(this.count == 0) return undefined;
        let deletedItem = this.items[this.count - 1];
        this.count -= 1;
        return deletedItem;
    }

    print() {
        let str = '';

        for (let i = 0; i < this.count; i++) {
            str += this.items[i] + ' ';
        }

        return str;
    }

    push(element) {
        this.items[this.count] = element;
        this.count +=1;
        return this.count - 1;
    }

    size() {
        return this.count;
    }
}//Stack

const stack = new Stack()
console.log(stack.isEmpty())
stack.push(100)
stack.push(200)
console.log(stack.isEmpty())
console.log(`Peek: ${stack.peek()}`)
stack.push(300)
console.log(stack.print())
stack.pop()
stack.pop()
stack.pop()
stack.pop()
// stack.push(400)
console.log(stack);