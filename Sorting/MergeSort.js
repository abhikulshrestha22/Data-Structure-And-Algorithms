const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = 0 + Math.floor(arr.length / 2);
  let arr1 = arr.slice(0, mid);
  let arr2 = arr.slice(mid, arr.length);
  arr1 = mergeSort(arr1);
  arr2 = mergeSort(arr2);
  return merge(arr1, arr2);
};

const merge = (arr1, arr2) => {
  let i1 = 0;
  let i2 = 0;
  let result = [];
  while (i1 < arr1.length || i2 < arr2.length) {
    if (i1 < arr1.length && i2 < arr2.length && arr1[i1] >= arr2[i2]) {
      result.push(arr2[i2]);
      i2 += 1;
    } else if (i1 < arr1.length && i2 < arr2.length && arr1[i1] < arr2[i2]) {
      result.push(arr1[i1]);
      i1 += 1;
    } else if (i1 >= arr1.length) {
      result.push(arr2[i2]);
      i2 += 1;
    } else {
      result.push(arr1[i1]);
      i1 += 1;
    }
  }
  return result;
};

console.log(mergeSort([2, 1, 5, 3, 8]));
