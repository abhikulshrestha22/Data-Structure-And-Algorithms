class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjancentList = [];
    this.visited = [];
    this.edgeTo = []; // Used to find the shortest path, as it links to the parent
    // For every vertex create an array
    // to store edge connecting to it
    for (let i = 0; i < vertices; i++) {
      this.adjancentList[i] = [];
    }
  }

  addEdge = (v1, v2) => {
    this.adjancentList[v1].push(v2);
    this.adjancentList[v2].push(v1);
  };

  // print the complete graph
  // or the adjancent list
  showGraph = () => {
    for (let i in this.adjancentList) {
      console.log("For the vertex " + i);
      for (let j of this.adjancentList[i]) {
        console.log(j);
      }
    }
  };

  // Depth first search from the given node
  dfs = (node) => {
    if (this.visited[node]) {
      return;
    }
    if (!this.visited[node]) {
      console.log(node);
      this.visited[node] = true;
    }

    for (let j of this.adjancentList[node]) {
      this.dfs(j);
    }
  };

  // Breadth first search from the given node
  bfs = (node) => {
    let queue = [];
    queue.push(node);
    this.visited[node] = true;
    while (queue.length > 0) {
      let currentNode = queue.shift();
      if (currentNode !== undefined) {
        console.log("Visited vertex", currentNode);
      }
      for (let item of this.adjancentList[currentNode]) {
        if (!this.visited[item]) {
          queue.push(item);
          this.visited[item] = true;
          this.edgeTo[item] = currentNode;
        }
      }
    }
  };

  getShortestPath = (node) => {
    let source = 0;
    if (!this.visited[node]) {
      console.log("No path present");
    }
    var path = [];
    for (let i = node; i != source; i = this.edgeTo[i]) {
      path.push(i);
    }
    path.push(source);
    console.log("Shortest path is ", path.reverse());
  };
}

const graphNew = new Graph(6);
graphNew.addEdge(0, 1);
graphNew.addEdge(0, 5);
graphNew.addEdge(0, 2);
graphNew.addEdge(5, 2);
graphNew.addEdge(1, 3);
graphNew.addEdge(2, 4);
// graphNew.showGraph();
graphNew.bfs(0);
graphNew.getShortestPath(4);
