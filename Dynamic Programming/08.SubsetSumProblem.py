class Solution:
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
print(soln.isSubsetSum(6,[3,34,4,12,5,2],30))