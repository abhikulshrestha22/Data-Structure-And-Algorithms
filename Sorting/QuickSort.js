const quickSort = (arr, low, high) => {
  if (low < high) {
    let pivot = partition(arr, low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);
  }
  return arr;
};

const partition = (arr, low, high) => {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i += 1;
      // replace arr[i] and arr[j]
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let tempNew = arr[high];
  arr[high] = arr[i + 1];
  arr[i + 1] = tempNew;
  return i + 1;
};

console.log(quickSort([2, 1, 5, 3, 8], 0, 4));
