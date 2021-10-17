class Solution:
    def count(self, S, m, n): 
        matrix = [[-1 for i in range(m+1)] for j in range(n+1)]
        for i in range(n+1):
            for j in range(m+1):
                if i==0:
                    matrix[i][j] = 0
                if j==0:
                    matrix[i][j] = 1
        for i in range(1,n+1):
            for j in range(1,m+1):
                if(j>=S[i-1]):
                    matrix[i][j] = matrix[i][j-S[i-1]] + matrix[i-1][j]
                else:
                    matrix[i][j] = matrix[i-1][j]
        return matrix[m][n]

soln = Solution()
print(soln.count([1,2,3],3,4))