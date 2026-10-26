class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let txt = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let reverseTxt = txt.split('').reverse().join('').toLowerCase();
        return reverseTxt === txt;
    }
}
