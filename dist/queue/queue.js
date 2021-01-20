"use strict";
class LinkedNodeQ {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor(value) {
        this.top = new LinkedNodeQ(value);
        this.button = this.top;
        this.length = 1;
    }
    enqueue(value) {
        const newNode = new LinkedNodeQ(value);
        this.button.next = newNode;
        this.button = newNode;
        this.length++;
        return this;
    }
    dequeue() {
        const newTop = this.top.next;
        this.top = newTop;
        this.length--;
        return this;
    }
    peek() {
        return this.top.value;
    }
}
const myQueue = new Queue(1);
