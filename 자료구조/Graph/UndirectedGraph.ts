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

  dfsIterative(start: string) {
    const stack = [start];
    const res: string[] = [];
    const visited: Record<string, boolean> = {};
    visited[start] = true;

    while (stack.length) {
      let cur: string = stack.pop()!;
      res.push(cur);
      this.adjacencyList[cur].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return res;
  }

  dfsRecursive(startVertex: string) {
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

  bfs(start: string) {
    const queue = [start];
    const res: string[] = [];
    const visited: {
      [key: string]: boolean;
    } = {};

    visited[start] = true;

    while (queue.length) {
      let cur: string = queue.shift()!;
      res.push(cur);

      this.adjacencyList[cur].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return res;
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
newGraph.addEdge('C', 'E');
newGraph.addEdge('D', 'E');
newGraph.addEdge('D', 'F');
newGraph.addEdge('E', 'F');

console.log(newGraph.bfs('A'));
