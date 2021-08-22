const BFS = (graph, source, dest) => {
  let queue = [];
  let visited = [];
  let result = [];
  queue.push(source);
  visited[source] = true;
  let dist = [];
  dist[0] = 0;
  if (dest === source) {
    return 0;
  }
  while (queue.length > 0) {
    let element = queue.shift();
    result.push(element);

    for (let i = 0; i < graph[element].length; i++) {
      let neighbor = graph[element][i];
      if (!visited[neighbor]) {
        queue.push(neighbor);
        visited[neighbor] = true;
        dist[neighbor] = dist[element] + 1;
        if (dest === neighbor) {
          return dist[neighbor];
        }
      }
    }
  }
  return -1;
};

let graphAdjList = [
  [1, 2],
  [0, 3],
  [0, 5],
  [1, 4],
  [3, 6],
  [2, 6],
  [4, 5],
];

console.log(BFS(graphAdjList, 0, 1));
