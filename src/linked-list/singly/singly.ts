class LinkedNode {
  value: any;
  next: LinkedNode | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class Singly {
  head: LinkedNode;
  tail: LinkedNode;
  length: number;

  constructor(value: any) {
    this.length = 1;
    this.head = new LinkedNode(value);
    this.tail = this.head;
  }

  prepend(value: any) {
    let newNode = new LinkedNode(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  append(value: any) {
    const newNode = new LinkedNode(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  insert(index: number, value: any) {
    let baseNode = this.getIndex(index - 1);
    let newNode = new LinkedNode(value);

    newNode.next = baseNode.next;
    baseNode.next = newNode;
    this.length++;

    return this;
  }

  delete(index: number) {
    let baseNode = this.getIndex(index - 1);
    let holdingNode = baseNode.next.next;
    baseNode.next = holdingNode;
    this.length--;

    return this;
  }

  private getIndex(index: number) {
    let currentNode: any = this.head;

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
