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

  dfs(startVertex: string) {
    const result: string[] = [];
    const visited: {
      [key: string]: boolean;
    } = {};
    const thisList = this.adjacencyList;

    (function helperDfs(vertex: string) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      thisList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return helperDfs(neighbor);
        }
      });
    })(startVertex);

    return result;
  }
}

const newGraph = new UndirectedGraph();

console.log(newGraph, '?');

newGraph.addVertex('A');
newGraph.addVertex('B');
newGraph.addVertex('C');
newGraph.addVertex('D');
newGraph.addVertex('E');
newGraph.addVertex('F');

newGraph.addEdge('A', 'B');
newGraph.addEdge('A', 'C');
newGraph.addEdge('B', 'D');
newGraph.addEdge('D', 'E');
newGraph.addEdge('E', 'F');

console.log(newGraph.dfs('A'));
