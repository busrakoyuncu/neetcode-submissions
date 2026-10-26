class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = {};
           
                strs.forEach(s=>{
                    const sortedS = s.split('').sort().join('');
                    console.log('sortedS ', sortedS)
                    if (!anagrams[sortedS]) {
                        anagrams[sortedS] = [];
                    }
                    anagrams[sortedS].push(s);
                })

        return Object.values(anagrams);
    }
}
