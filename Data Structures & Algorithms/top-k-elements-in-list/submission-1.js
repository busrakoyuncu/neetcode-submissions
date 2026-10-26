class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let wallet = {}

        for(let i = 0; i<nums.length; i++){
            if(wallet[nums[i]] === undefined) wallet[nums[i]] = 1
            else wallet[nums[i]] = wallet[nums[i]] + 1
        }
        // console.log('wallet ', wallet)
        // console.log('wallet1111 ', Object.entries(wallet).sort((a,b)=>b[1]-a[1]))
        // console.log('wallet2222 ', Object.entries(wallet).sort((a,b)=>b[1]-a[1]).slice(0,k))
        // console.log('wallet333333 ', Object.entries(wallet).sort((a,b)=>b[1]-a[1]).slice(0,k).map(entry=>Number(entry[0])))

        return Object.entries(wallet).sort((a,b)=>b[1]-a[1]).slice(0,k).map(entry=>Number(entry[0]))

    }
}
