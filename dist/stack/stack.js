"use strict";
class LinkedNodeS {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor(value) {
        this.head = new LinkedNodeS(value);
        this.length = 1;
    }
    peek() {
        return this.head.value;
    }
    push(value) {
        const newNode = new LinkedNodeS(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    pop() {
        const newNode = this.head.next;
        this.head = newNode;
        this.length--;
        return this;
    }
}
