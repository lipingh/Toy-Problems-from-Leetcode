/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
    let dp = [...Array(n)].map(x => [...Array(n)]);
    const helper = (lo, hi) => {
        if (lo >= hi) {
            return 0;
        }
        if (dp[lo][hi]) {
            return dp[lo][hi];
        }
        let result = Number.MAX_VALUE;
        for (let i = lo; i <= hi; i++) {
            result = Math.min(result, Math.max(helper(lo, i-1), helper(i+1, hi))+i);
        }
        dp[lo][hi] = result;
        return result;
    }
    return helper(1, n);
};