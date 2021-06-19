// Problem link - https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

var searchRange = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let firstOccurance = -1;
  let endOcurrance = -1;
  // Find the first occurance
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    // Check if equal and previous element is smaller
    if ((mid === 0 || nums[mid - 1] < target) && nums[mid] === target) {
      firstOccurance = mid;
      break;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  // Find the last occurance
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    // Check if equal and next element is greater
    if ((mid === 0 || nums[mid + 1] > target) && nums[mid] === target) {
      endOcurrance = mid;
      break;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      start = mid + 1;
    }
  }
  return [firstOccurance, endOcurrance];
};

searchRange([5, 7, 7, 8, 8, 10], 8);
