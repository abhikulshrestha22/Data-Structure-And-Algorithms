class Solution:

    def equalPartition(self, N, arr):
       sum = 0
       for i in arr:
           sum += i
       if sum % 2 != 0:
           return 'NO'
       sum_needed = sum//2
       ans = self.isSubsetSum(N,arr,sum_needed)
       if(ans == 1):
           return 'YES'
       else:
           return 'NO'

    def isSubsetSum (self, N, arr, sum):
        matrix = [[-1 for i in range(sum+1)] for j in range(N+1)]
        for i in range(N+1):
            for j in range(sum+1):
                if i==0:
                    matrix[i][j] = False
                if j==0:
                    matrix[i][j] = True
        for i in range(1,N+1):
            for j in range(1,sum+1):
                if(j>=arr[i-1]):
                    matrix[i][j] = matrix[i-1][j-arr[i-1]] or matrix[i-1][j]
                else:
                    matrix[i][j] = matrix[i-1][j]
        if matrix[N][sum] == False:
            return 0
        else:
            return 1

soln = Solution()
print(soln.equalPartition(4,[1,5,11,5]))