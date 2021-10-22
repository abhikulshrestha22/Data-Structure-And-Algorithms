class Solution:
    def find_permutation(self, s):
        l = 0
        r = len(s)
        list_str = list(s)
        self.permute(list_str,l,r)

    def permute(self,s,l,r):
        if l== r:
            print(''.join(s)) 
        for i in range(l,r):    
            s[l],s[i] = s[i],s[l]
            self.permute(s,l+1,r)
            s[l],s[i] = s[i],s[l]
        


soln = Solution()
soln.find_permutation('ABCD')