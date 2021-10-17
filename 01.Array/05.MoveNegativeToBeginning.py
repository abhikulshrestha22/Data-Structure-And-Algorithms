#User function Template for python3

class Solution:
    def moveNegativeToBegining(self,arr):
        low = 0
        high = len(arr)-1
        while(low<=high and high < len(arr)):
            if arr[low] < 0:
                low+=1
            elif arr[low] > 0 and arr[high] < 0:
                arr[low],arr[high] = arr[high],arr[low]
                low+=1
                high-=1
            else:
                high+=1

            

soln = Solution()
arr = [ -12, 11, -13, -5, 6, -7, 5, -3, -6]
soln.moveNegativeToBegining(arr)
print(arr)