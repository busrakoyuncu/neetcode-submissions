class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let pairs = {'(': ')', '[': ']', '{': '}'}
        let stack = []

        for(const char of s){
            if(pairs[char] !== undefined) stack.push(char)
            else {
                let lastOpened = stack.pop()
                if(pairs[lastOpened] !== char) return false
            }
        }
        return stack.length === 0
    }
}
