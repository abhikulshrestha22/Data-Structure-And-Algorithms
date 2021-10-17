class Solution:
    
    #Function to return max value that can be put in knapsack of capacity W.
    def knapSack(self,W, wt, val, n):
       
        matrix = [[-1 for i in range(W+1)] for j in range(n+1)]
        for i in range(n+1):
            for j in range(W+1):
                if i==0 or j==0:
                    matrix[i][j] = 0
        for i in range(1,n+1):
            for j in range(1,W+1):
                if j >= wt[i-1]:
                    matrix[i][j] = max(val[i-1] + matrix[i-1][W-wt[i-1]],matrix[i][j-1])
                else:
                    matrix[i][j] = matrix[i][j-1]
        return matrix[n][W]


soln = Solution()
print(soln.knapSack(4,[4,5,1],[1,2,3],3))