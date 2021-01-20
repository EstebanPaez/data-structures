class Graph {
  private list: any;
  private NumberOfNodes: number;

  constructor() {
    this.list = {};
    this.NumberOfNodes = 0;
  }

  addVortex(node: any, force: boolean = false) {
    if (!this.list[node] || force) {
      if (force) console.warn('Force is true, i can rewrite a node');
      this.list[node] = [];
      this.NumberOfNodes++;
    } else {
      console.error(`The node: ${node} was already declared`);
    }
    return this;
  }

  addEdge(node1: any, node2: any) {
    if (!this.list[node1]) {
      console.warn(`Node: ${node1} doesn't exist, I will create it`);
      this.addVortex(node1);
    }
    if (!this.list[node2]) {
      console.warn(`Node: ${node2} doesn't exist, I will create it`);
      this.addVortex(node2);
    }
    this.list[node1].push(node2);
    this.list[node2].push(node1);
    return this;
  }
}

const myGraph = new Graph();

myGraph.addVortex('1');
myGraph.addVortex('2');
myGraph.addEdge('1', '3');
