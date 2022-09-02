class CustomArray {
    constructor() {
        this.length = 0;
        this.items = {};
    }

    push(item) {
        let itemIndex = this.length;
        this.items[`${itemIndex}`] = item;
        this.length++;
    }

    pop() {
        if (this.length < 1) return console.log('There is nothing to remove');
        
        delete this.items[`${this.length - 1}`];
        this.length--;
    }
}

let customArray = new CustomArray();

customArray.push('test');
customArray.push('test2');

console.log(customArray);
customArray.pop();
console.log(customArray);