class Solution:
    def reverseString(self, s):
        """
        Do not return anything, modify s in-place instead.
        """
        for i in range(0,len(s)):
            temp = s[i]
            s[i] = s[len(s)-i-1]
            s[len(s)-i-1] = temp
        
a = Solution()
str1 = ["h","e",'l','l','o']
a.reverseString(str1)
print(str1)