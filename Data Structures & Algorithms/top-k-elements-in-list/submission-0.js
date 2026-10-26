class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequent = {};
        const answerArr = [];
        nums.forEach(num =>{
            if(!frequent[num]) frequent[num] = 1
            else frequent[num] = frequent[num]+1
        })
        const sortedArr = Object.entries(frequent).sort((a,b)=>b[1]-a[1])
        console.log('freq ', frequent)
        console.log('freq obj', sortedArr)
        for(let i = 0; i<k;i++){
            let item = sortedArr[i][0];
            answerArr.push(item)
        }
        console.log('answerArr ', answerArr)
        return answerArr;

    }
}
