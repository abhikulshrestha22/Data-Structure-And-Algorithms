// https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/
// Solving the problem using DP by memoizing

const knapSack = (remainingWeight, wtArr, valArr, n) => {
    if (n === 0 || remainingWeight === 0) {
        return 0;
    }

    if (memoizeArr[n - 1][remainingWeight] !== -1) {
        return memoizeArr[n - 1][remainingWeight]
    }

    if (wtArr[n - 1] > remainingWeight) {
        // do not include this weight
        let result = knapSack(remainingWeight, wtArr, valArr, n - 1);
        memoizeArr[n - 1][remainingWeight] = result;
        return result
    }
    let result = Math.max(
        knapSack(remainingWeight, wtArr, valArr, n - 1),
        valArr[n - 1] + knapSack(remainingWeight - wtArr[n - 1], wtArr, valArr, n - 1)
    )
    memoizeArr[n - 1][remainingWeight] = result;
    return result
}

val = [60, 100, 120]
wt = [10, 20, 30]
W = 50
n = val.length
let memoizeArr = [];
for (i = 0; i < n + 1; i++) {
    memoizeArr[i] = [];
    for (j = 0; j < W + 1; j++) {
        memoizeArr[i][j] = -1;
    }
}
console.log(knapSack(W, wt, val, n))