class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        console.log('nums ', nums)
        console.log('target ', target)
        for(let i = 0;i<nums.length;i++){
            let isNeeded = target - nums[i]
            console.log('isNeeded ', isNeeded)
            console.log('nums.slice(i+1). ', nums.slice(i+1))
            let j = nums.slice(i+1).indexOf(isNeeded)
            if(j !== -1) return [i, j+i+1]
        }
    }
}
