class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let nonDuplicated = new Set(nums)
        return nonDuplicated.size !== nums.length
    }
}
