
class Solution:
    def longestCommonSubstr(self, S1, S2, n, m):
        max_val = 0
        matrix = [[-1 for i in range(m+1)] for j in range(n+1)]
        for i in range(0,n):
            for j in range(0,m):
                if i==0 or j==0:
                    matrix[i][j] = 0
        for i in range(1,n):
            for j in range(1,m):
                if S1[i-1] == S2[j-1]:
                    matrix[i][j] = 1 + matrix[i-1][j-1]
                    max_val = max(max_val,matrix[i][j])
                else:
                    matrix[i][j] = 0
        return max_val


soln = Solution()
print(soln.longestCommonSubstr('adac','adadac',4,6))