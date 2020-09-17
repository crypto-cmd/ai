export default class Queue {
    constructor() {
        this.elements = [];
    }
    push(element) {
        this.elements.push(element);
    }
    pop() {
        return this.elements.shift();
    }
}
