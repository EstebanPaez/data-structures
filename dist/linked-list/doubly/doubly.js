"use strict";
class LinkedNodeD {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class Doubly {
    constructor(value) {
        this.length = 1;
        this.head = new LinkedNodeD(value);
        this.tail = this.head;
    }
    prepend(value) {
        let newNode = new LinkedNodeD(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    append(value) {
        const newNode = new LinkedNodeD(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    insert(index, value) {
        let baseNode = this.getIndex(index - 1);
        let newNode = new LinkedNodeD(value);
        newNode.next = baseNode.next;
        newNode.next.prev = newNode;
        newNode.prev = baseNode;
        baseNode.next = newNode;
        this.length++;
        return this;
    }
    delete(index) {
        let baseNode = this.getIndex(index - 1);
        let holdingNode = baseNode.next.next;
        holdingNode.prev = baseNode;
        baseNode.next = holdingNode;
        this.length--;
        return this;
    }
    getIndex(index) {
        let currentNode = this.head;
        for (let i = 0; i !== index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
}
let myDoubly = new Doubly('Camilo');
myDoubly.prepend('Laura');
myDoubly.append('Jose');
myDoubly.prepend('yurani');
myDoubly.insert(1, 'sapo');
myDoubly.delete(2);
