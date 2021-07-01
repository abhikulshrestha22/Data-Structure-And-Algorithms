/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
var maximumRemovals = function (s, p, removable) {
  let removed = 0;
  let newArr = s;
  while (removable.length > 0) {
    let removableIndex = removable.shift();
    newArr =
      newArr.substring(0, removableIndex) +
      newArr.substring(removableIndex + 1, s.length);
    let start = 0;
    let end = newArr.length - 1;
    for (let i = 0; i < p.length; i++) {
      let index = searchItem(newArr, start, end, p[i]);
      if (index === -1) {
        return removed;
      } else {
        start = index;
      }
    }
    removed = removed + 1;
  }
  return removed;
};

var searchItem = function (arr, start, end, target) {
  let mid = start + Math.floor((end - start) / 2);
  if (start <= end) {
    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      return searchItem(arr, mid + 1, end, target);
    } else if (target < arr[mid]) {
      return searchItem(arr, start, mid - 1, target);
    }
  }

  return -1;
};

console.log(maximumRemovals("abcacb", "ab", [3, 1, 0]));
