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

  removeEdge(vertex1: string, vertex2: string) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) throw new Error('does not exisiting vertex');
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
  }
  removeVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) throw new Error('does not exisiting vertex');
    while (this.adjacencyList[vertex].length) {
      const poppedVertex = this.adjacencyList[vertex].pop() ?? '';
      this.removeEdge(vertex, poppedVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

const newGraph = new UndirectedGraph();

newGraph.addVertex('zzz');

console.log(newGraph, '?');
