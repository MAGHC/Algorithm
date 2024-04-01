class UndirectedGraph {
  private adjacencyList: {
    [key: string]: string[];
  };

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: string) {
    if (this.adjacencyList[vertex]) throw new Error('Exisiting vertex');
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1: string, vertex2: string) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) throw new Error('does not exisiting vertex');
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
}

const newGraph = new UndirectedGraph();

newGraph.addVertex('zzz');

console.log(newGraph, '?');
