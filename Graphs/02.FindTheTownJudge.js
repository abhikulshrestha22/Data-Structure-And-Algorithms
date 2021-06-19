/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  let trustablePeople = new Array(n);
  for (let [i, j] of trust) {
    if (trustablePeople[j] !== undefined) {
      trustablePeople[j] += 1;
    } else {
      trustablePeople[j] = 0;
    }
  }
  for (let index in trustablePeople) {
    if (trustablePeople[index] === n - 1 - 1) {
      return index;
    }
  }
  return -1;
};

console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1],
  ])
);
