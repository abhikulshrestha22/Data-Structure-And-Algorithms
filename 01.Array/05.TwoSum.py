#Problem link - https://leetcode.com/problems/two-sum/

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        nums_needed = {}
        for i in range(0,len(nums)):
            if nums[i] in nums_needed:
                return [nums_needed[nums[i]],i]
            else:
                remaining_val = target - nums[i]
                # store value as index on key as remaining value
                nums_needed[remaining_val] = i
            