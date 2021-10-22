# Problem link - https://practice.geeksforgeeks.org/problems/edit-distance3702/1#


class Solution:
	def editDistance(self, s, t):
	    len_s = len(s)
	    len_t = len(t)
	    dp = [[0 for i in range(0,len_t+1)] for j in range (0,len_s+1)]
	    
	    for i in range(0,len_s+1):
	        for j in range(0,len_t+1):
	            if j==0:
	                dp[i][j] = i
	            if i==0:
	                dp[i][j] = j
	    
	    for i in range(1,len_s+1):
	        for j in range(1,len_t+1):
	            if s[i-1]==t[j-1]:
	                dp[i][j] = dp[i-1][j-1]
	            else:
	                dp[i][j] = 1 + min(dp[i-1][j-1], dp[i-1][j],dp[i][j-1])
	    
	    return dp[len_s][len_t]

soln = Solution()
print(soln.editDistance("geek", "gesek"))
