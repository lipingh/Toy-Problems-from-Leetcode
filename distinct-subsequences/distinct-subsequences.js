/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const M = s.length;
    const N = t.length;
    let memo = {};
    const helper = (i, j) => {
        // base case
        if (i === M || j === N || M-i < N-j) {
            return j === N ? 1 : 0;
        }
        const key = `${i}#${j}`;
        if (memo[key] !== undefined) {
            return memo[key];
        }
        let count = helper(i+1, j);
        if (s[i] === t[j]) {
            count += helper(i+1, j+1);
        }
        memo[key] = count;
        return count;
    }
    return helper(0, 0);
};