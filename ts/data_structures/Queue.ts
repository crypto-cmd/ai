export default class Queue<T> {
  private elements: T[] = [];
  push(element: T) {
    this.elements.push(element);
  }
  pop() {
    return this.elements.shift();
  }
}
