"use strict";
class LinkedNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Singly {
    constructor(value) {
        this.length = 1;
        this.head = new LinkedNode(value);
        this.tail = this.head;
    }
    prepend(value) {
        let newNode = new LinkedNode(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    append(value) {
        const newNode = new LinkedNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    insert(index, value) {
        let baseNode = this.getIndex(index - 1);
        let newNode = new LinkedNode(value);
        newNode.next = baseNode.next;
        baseNode.next = newNode;
        this.length++;
        return this;
    }
    delete(index) {
        let baseNode = this.getIndex(index - 1);
        let holdingNode = baseNode.next.next;
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
let mySingly = new Singly('Camilo');
mySingly.prepend('Laura');
mySingly.append('Jose');
mySingly.insert(1, 'sapo');
mySingly.delete(2);
