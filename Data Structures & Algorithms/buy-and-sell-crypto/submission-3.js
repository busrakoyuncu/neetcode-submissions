class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        console.log('prices ', prices)
        let minForNow = prices[0]
        let maxProfit = 0

        for(let i = 0; i<prices.length;i++){
            let todaysProfit = prices[i]-minForNow
            if(prices[i]<minForNow) minForNow = prices[i]
            if(todaysProfit>maxProfit) maxProfit = todaysProfit
        }
        return maxProfit
    }
}
