// https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/
// Solving the problem using regular recursion


const knapSack = (remainingWeight, wtArr, valArr, n) => {
    if (n === 0 || remainingWeight === 0) {
        return 0;
    }

    if (wtArr[n - 1] > remainingWeight) {
        // do not include this weight
        return knapSack(remainingWeight, wtArr, valArr, n - 1);
    }
    return Math.max(
        knapSack(remainingWeight, wtArr, valArr, n - 1),
        valArr[n - 1] + knapSack(remainingWeight - wtArr[n - 1], wtArr, valArr, n - 1)
    )
}


val = [60, 100, 120]
wt = [10, 20, 30]
W = 50
n = val.length
console.log(knapSack(W, wt, val, n))