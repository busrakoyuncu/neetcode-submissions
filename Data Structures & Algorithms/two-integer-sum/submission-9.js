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
            let isNeededOne = target - nums[i]
            console.log('hoppaalaa ', nums.slice(0,i).concat(nums.slice(i+1)))
            let indexOfNeeded = nums.indexOf(isNeededOne, i+1)
            if(indexOfNeeded !== -1) return [i,indexOfNeeded]
        }
    }
}
