var threeSum = function (nums) {
  let result = [];
  if (nums.length < 3) return result;

  nums.sort((a, b) => a - b);
  //  nums = [...new Set(nums)].sort((a,b) => a-b)//dont know why this isn't working

  for (i = 0; i < nums.length; i++) {
    let sum = 0;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) left++;
      else right--;
    }
    while (nums[i + 1] === nums[i]) i++;
  }
  return result;
};

console.log(JSON.stringify(threeSum([0, 0, 0, 0])));
