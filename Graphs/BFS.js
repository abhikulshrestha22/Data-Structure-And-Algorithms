const BFS = (graph, source) => {
  let queue = [];
  let visited = [];
  let result = [];
  queue.push(source);
  visited[source] = true;
  while (queue.length > 0) {
    let element = queue.shift();
    result.push(element);

    for (let i = 0; i < graph[element].length; i++) {
      let neighbor = graph[element][i];
      if (!visited[neighbor]) {
        queue.push(neighbor);
        visited[neighbor] = true;
      }
    }
  }
  return result;
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

console.log(BFS(graphAdjList, 0));
