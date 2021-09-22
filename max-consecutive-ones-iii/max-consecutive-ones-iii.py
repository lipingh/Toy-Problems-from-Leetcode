class Solution(object):
    def longestOnes(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        left, right = 0, 0
        numZeros = 0
        maxLen = 0
        while right < len(nums):
            if nums[right] == 0:
                numZeros += 1
            while numZeros == k + 1:
                if nums[left] == 0:
                    numZeros -= 1
                left += 1
            maxLen = max(maxLen, right - left + 1)
            right += 1
        return maxLen;