class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sArr = [...s];
        let tArr = [...t];
        let count = 0;
    
        if(sArr.length === tArr.length){
            return s.split('').sort().join() === t.split("").sort().join();
        }
        else return false;
    }
}
