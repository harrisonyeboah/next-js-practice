class Solution:
    def groupAnagrams(self, strs):
        return "".join(sorted(strs[0]))         


instanceOfSolution = Solution()

print(instanceOfSolution.groupAnagrams(["hello"]))