class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const seen = new Map<number,number>();
        for(const [i,num] of nums.entries()){
            const j = seen.get(target - num);
            if (j!==undefined) return [j,i]
            else seen.set(num,i)
        }
        return []
    }
}
