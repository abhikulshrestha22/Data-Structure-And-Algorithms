// For simplicity we are considering the data to be b/w 0 and 9
const countingSort = (arr, maxVal) => {
  // First create an output arr
  const output = [];

  // maxVal + 1 to consider 0 too
  const countArr = new Array(maxVal + 1).fill(0);

  // Add the count of no. in count arr
  for (let i = 0; i < arr.length; i++) {
    countArr[arr[i]] += 1;
  }

  // countArr[0] = arr[0];
  for (let j = 1; j <= maxVal; j++) {
    // Sum up the arr till the present index item
    countArr[j] = countArr[j] + countArr[j - 1];
  }

  // console.log("after count adding", countArr);

  for (let k = arr.length - 1; k >= 0; k--) {
    // put the output at the countArr value
    // index for CountArr is arr[k]
    let index = arr[k];
    countArr[index] -= 1;
    output[countArr[index]] = arr[k];
  }

  return output;
};

console.log(countingSort([1, 4, 1, 2, 7, 5, 2], 7));
