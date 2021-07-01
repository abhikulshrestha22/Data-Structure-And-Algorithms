// Problem Link - https://leetcode.com/problems/3sum-closest/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  //Sort numbers
  nums = nums.sort((a, b) => a - b);
  let sumFinal = Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === target) {
        return sum;
      } else if (sum > target) {
        right--;
      } else {
        left++;
      }
      // Whenever diff. is lower than before, update the sumFinal
      if (Math.abs(sumFinal - target) > Math.abs(sum - target)) {
        sumFinal = sum;
      }
    }
  }
  return sumFinal;
};
console.log(threeSumClosest([1, 1, 1, 0], -100));
