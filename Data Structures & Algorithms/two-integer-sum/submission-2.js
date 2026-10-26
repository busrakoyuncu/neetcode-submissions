class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // console.log('nums ', nums)
        // console.log('target ', target)
        for(let i = 0;i<nums.length;i++){
            let neededOne = target - nums[i]
            // console.log('neededOne ', neededOne)
            if(nums.indexOf(neededOne, i+1) !== -1) return [i, nums.indexOf(neededOne, i+1)]
        }
    }
}
