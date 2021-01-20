class LinkedNodeS {
  value: any;
  next: LinkedNodeS | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  head: LinkedNodeS;
  length: number;

  constructor(value: any) {
    this.head = new LinkedNodeS(value);
    this.length = 1;
  }

  peek() {
    return this.head.value;
  }

  push(value: any) {
    const newNode: any = new LinkedNodeS(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  pop() {
    const newNode: any = this.head.next;

    this.head = newNode;
    this.length--;

    return this;
  }
}
