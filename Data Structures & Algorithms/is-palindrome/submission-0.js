class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let solution = true;
        let txt = s.replace(/[^a-zA-Z0-9]/g, '');
        let reverseTxt = txt.split('').reverse();
        let txtArr = [...txt]

        for(let i = 0 ; i<txtArr.length ;i++){
                if(txtArr[i].toLowerCase()!==reverseTxt[i].toLowerCase()) return solution = false
        }
        return solution
    }
}
