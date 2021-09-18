/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1);
    }
    let dict = {};
    for (let i = 0; i < nums1.length; i++) {
        if (dict[nums1[i]] === undefined) {
            dict[nums1[i]] = 0;
        }
        dict[nums1[i]]++;
    }
    let result = [];
    for (let j = 0; j < nums2.length; j++) {
        if (dict[nums2[j]]) {
            result.push(nums2[j]);
            dict[nums2[j]]--;
        }
    }
    return result;
};