/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let result = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            result = Math.max(result, count);
            count = 0;
        } else {
            count += 1;
        }
        
    }
    return Math.max(result, count);
};