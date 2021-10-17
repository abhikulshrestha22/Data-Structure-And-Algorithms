// https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/
// Here knapSack is solved directly using the matrix
// The idea is to build up the last corner element (x)  by using the previous ones

//   Weight
//   |0|0|0|
// n |0| | |
//   |0| |x|

// All with weight 0 and n = 0 will be 0 as u can see in the recursive

const knapsack = (valArr, wtArr, weight, length) => {
  let table = Array(length + 1);
  // Set 0 on length=0 and w = 0
  for (let i = 0; i < length + 1; i++) {
    table[i] = [];
    for (let j = 0; j < weight + 1; j++) {
      if (i === 0 || j === 0) {
        table[i][j] = 0;
      }
    }
  }

  for (let i = 1; i < length + 1; i++) {
    for (let j = 1; j < weight + 1; j++) {
      // If weight of that particular is more than the total weight, do not include it
      if (wtArr[i - 1] > j) {
        table[i][j] = table[i - 1][j];
      } else {
        table[i][j] = Math.max(
          table[i - 1][j],
          valArr[i - 1] + table[i - 1][j - wt[i - 1]]
        );
      }
    }
  }
  return table[length][weight];
};

val = [60, 100, 120];
wt = [10, 20, 30];
W = 50;
n = val.length;

console.log(knapsack(val, wt, W, n));
