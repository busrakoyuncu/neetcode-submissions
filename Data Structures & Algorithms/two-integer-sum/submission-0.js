class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let indexs = [];
        nums.forEach((num, i)=>{
            nums.slice(i+1).forEach((inNum, inI)=>{
                if(num + inNum === target) 
                    indexs.push(i, inI+i+1)
            })
        })
         return indexs
    }
}
