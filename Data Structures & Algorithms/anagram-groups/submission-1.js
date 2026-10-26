class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // console.log('strs ', strs)
        let wallet = {}

        for(let i = 0;i<strs.length;i++){
            let sortedOne = strs[i].split('').sort().join('')
            if(wallet[sortedOne] === undefined) wallet[sortedOne] = [strs[i]]
            else wallet[sortedOne].push(strs[i])
        }
        // console.log(Object.values(wallet))
        return Object.values(wallet)
    }
}
