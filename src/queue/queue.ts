class LinkedNodeQ {
  value: any;
  next: LinkedNodeS | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  top: LinkedNodeS;
  button: LinkedNodeS;
  length: number;

  constructor(value: any) {
    this.top = new LinkedNodeQ(value);
    this.button = this.top;
    this.length = 1;
  }

  enqueue(value: any) {
    const newNode: any = new LinkedNodeQ(value);

    this.button.next = newNode;
    this.button = newNode;
    this.length++;

    return this;
  }

  dequeue() {
    const newTop: any = this.top.next;

    this.top = newTop;
    this.length--;

    return this;
  }

  peek() {
    return this.top.value;
  }
}

const myQueue = new Queue(1);
