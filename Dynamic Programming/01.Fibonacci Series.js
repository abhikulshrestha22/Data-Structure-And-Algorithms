// Function to get the value of Fibbonacci series

// We are going to use Memoization here.
// Keeping the first value as null, so we don't have to subtract one when calculating & putting numbers.

let arr = [null, 1,1];

// If arr contains the n-1 or n-2 term, add them up, otherwise calculate and store in the arr
const getFib = num => {
    if(num === 1 || num === 2) {
        return 1;
    }
    if(!arr[num-1]) {
        arr[num-1] = getFib(num -1);
    }
    if(!arr[num-2]) {
        arr[num-2] = getFib(num-2);
    }
    return arr[num-1] + arr[num-2];
}

console.log(getFib(6));