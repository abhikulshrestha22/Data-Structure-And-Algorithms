class Solution:
    def knapSack(self, N, W, val, wt):
        matrix = [[-1 for i in range(W+1)] for j in range(N+1)]
        for i in range(N+1):
            for j in range(W+1):
                if i==0 or j==0:
                    matrix[i][j] = 0
        for i in range(N+1):
            for j in range(W+1):
                if(j>=wt[i-1]):
                    matrix[i][j] = max(val[i-1] + matrix[i][j-wt[i-1]],matrix[i-1][j])
                else:
                    matrix[i][j] = matrix[i-1][j]
        return matrix[N][W]


soln = Solution()
print(soln.knapSack(1,8,[1],[9]))