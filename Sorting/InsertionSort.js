// Insertion sort
// Scan items before the selected index, and move them to +1 index until element is greater than the key and then assign key j+1

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
};

console.log(insertionSort([2, 1, 5, 3, 8]));
