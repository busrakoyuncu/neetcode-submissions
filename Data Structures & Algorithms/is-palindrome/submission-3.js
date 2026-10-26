class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // console.log('s', s)
        let allowed = '1234567890qwertyuiopasdfghjklzxcvbnm' //regex would be nice but i cannot remember rhe syntax right now
        let cleanedOne = s.toLowerCase().split('').filter(char => allowed.includes(char)).join('')
        // console.log('cleanedOne ', cleanedOne)
        let reversedOne = cleanedOne.split('').reverse().join('')
        // console.log('reversedOne ', reversedOne)
        return reversedOne === cleanedOne
    }
}
