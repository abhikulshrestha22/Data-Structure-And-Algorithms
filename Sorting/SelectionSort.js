// Selection Sort - Find min. element in rest of the array and move it on the ith position

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    // Swap values
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

console.log(selectionSort([2, 1, 5, 3, 8]));
