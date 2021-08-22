// This approach uses adjacency matrix
// and have the complexity of O(V*V)

class Graph {
  constructor(adjMatrix) {
    this.adjMatrix = adjMatrix;
    this.vertices = this.adjMatrix.length;
  }

  minDist = (dist, sptSet) => {
    let min = Infinity;
    let minIndex = -1;
    for (let i = 0; i < this.vertices; i++) {
      if (sptSet[i] === false && dist[i] <= min) {
        min = dist[i];
        minIndex = i;
      }
    }
    return minIndex;
  };

  findShortestDistForEveryVertex = (source) => {
    // sptSet basically indicated that which elements shorted dist. is fixed and won't be changed
    let sptSet = new Array(this.vertices).fill(false);
    // Initially, all dist will be infinity except for the source itself
    let dist = new Array(this.vertices).fill(Infinity);
    dist[source] = 0;

    for (let i = 0; i < this.vertices - 1; i++) {
      // Pick the min. distance index to traverse
      let u = this.minDist(dist, sptSet);
      // Marked u as sptSet
      sptSet[u] = true;

      // update the dist. value of neighbors of picked index
      for (let v = 0; v < this.vertices; v++) {
        // Only update when
        // 1) there is path b/w u and v
        // 2) v's shortest dist. is not yet finalized i.e. sptSet(v) = false
        // 3) dist[u] is not infinite
        // 4) dist[u] + adjMatrix[u][v] is less then dist[v]
        if (
          sptSet[v] === false &&
          this.adjMatrix[u][v] !== 0 &&
          dist[u] !== Infinity &&
          dist[u] + this.adjMatrix[u][v] < dist[v]
        ) {
          dist[v] = dist[u] + this.adjMatrix[u][v];
        }
      }
    }
    console.log(dist);
  };
}

let g1AdjMat = [
  [0, 4, 0, 0, 0, 0, 0, 8, 0],
  [4, 0, 8, 0, 0, 0, 0, 11, 0],
  [0, 8, 0, 7, 0, 4, 0, 0, 2],
  [0, 0, 7, 0, 9, 14, 0, 0, 0],
  [0, 0, 0, 9, 0, 10, 0, 0, 0],
  [0, 0, 4, 14, 10, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 1, 6],
  [8, 11, 0, 0, 0, 0, 1, 0, 7],
  [0, 0, 2, 0, 0, 0, 6, 7, 0],
];

const g1 = new Graph(g1AdjMat);
g1.findShortestDistForEveryVertex(0);
