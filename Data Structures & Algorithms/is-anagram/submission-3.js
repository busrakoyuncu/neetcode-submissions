class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let walletS = {}
        let walletT = {}

        if(s.length !== t.length) return false

        for(let i=0;i<s.length;i++){
            if(walletS[s[i]] === undefined) walletS[s[i]] = 1
            else walletS[s[i]] = walletS[s[i]]+1 
        }

        for(let i=0;i<t.length;i++){
            if(walletT[t[i]] === undefined) walletT[t[i]] = 1
            else walletT[t[i]] = walletT[t[i]]+1 
        }

        for(const key in walletS){
            if(walletS[key] !== walletT[key]) return false
        }
        return true
    }
}
