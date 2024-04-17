interface WeightedGraphItem {
  node: string;
  weight: number;
}

class WeightedGraph {
  private adjacencyList: {
    [key: string]: WeightedGraphItem[];
  };

  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex: string) {
    if (this.adjacencyList[vertex]) throw new Error('Exisiting vertex');
    this.adjacencyList[vertex] = [];
  }

  addEdge(v1: string, v2: string, w: number) {
    this.adjacencyList[v1].push({ node: v2, weight: w });
    this.adjacencyList[v2].push({ node: v1, weight: w });
  }
}

const g = new WeightedGraph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');

g.addEdge('A', 'B', 5);
g.addEdge('A', 'C', 9);
g.addEdge('B', 'C', 7);
