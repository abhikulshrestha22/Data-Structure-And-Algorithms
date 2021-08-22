snakeLadder = function (A, B) {
  let queue = [];
  let visited = [];
  // Convert A and B in obj
  let ladders = {};
  for (let item of A) {
    ladders[item[0]] = item[1];
  }
  let snakes = {};
  for (let item of B) {
    snakes[item[0]] = item[1];
  }

  queue.push(1);
  let dist = [];
  dist[1] = 0;
  visited[1] = true;
  while (queue.length > 0) {
    const currentElement = queue.shift();
    if (currentElement === 100) {
      return dist[currentElement];
    }

    //   if (ladders[currentElement] !== undefined) {
    //     queue.push(ladders[currentElement]);
    //     dist[ladders[currentElement]] = dist[currentElement] + 1;
    //     visited[snakes[currentElement]] = true;
    //   }
    //   if (snakes[currentElement] !== undefined) {
    //     queue.push(snakes[currentElement]);
    //     dist[snakes[currentElement]] = dist[currentElement] + 1;
    //     visited[snakes[currentElement]] = true;
    //   }
    for (let i = 1; i <= 6; i++) {
      if (ladders[currentElement + i] !== undefined) {
        queue.push(ladders[currentElement + i]);
        dist[ladders[currentElement + i]] = dist[currentElement + i] + 1;
        visited[snakes[currentElement + i]] = true;
      } else if (snakes[currentElement + i] !== undefined) {
        queue.push(snakes[currentElement + i]);
        dist[snakes[currentElement + i]] = dist[currentElement + i] + 1;
        visited[snakes[currentElement + i]] = true;
      } else {
        if (!visited[currentElement + i]) {
          queue.push(currentElement + i);
          dist[currentElement + i] = dist[currentElement] + 1;
          visited[currentElement + i] = true;
        }
        //   if(!visited[currentElement+i]) {
        //   queue.push(currentElement + i);
        //   dist[currentElement + i] = dist[currentElement] + 1;
        //   visited[currentElement+i] = true;

        //   }
      }
    }
  }
  return -1;
};

A = [[3, 90]];
B = [
  [99, 10],
  [97, 20],
  [98, 30],
  [96, 40],
  [95, 50],
  [94, 60],
  [93, 70],
];
console.log(snakeLadder(A, B));
