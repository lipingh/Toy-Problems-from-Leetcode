/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
    let currEven = 1;
    let currOdd = 1;
    let maxLen = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i-1]) {
            currEven = 1;
            currOdd = 1;
            continue;
        }
        if (i % 2 === 0) {
            if(arr[i] < arr[i-1]) {
                currEven += 1;
                currOdd = 1;
            } else if (arr[i] > arr[i-1]){
                currOdd += 1;
                currEven = 1;
            }
        } else {
            if(arr[i] > arr[i-1]) {
                currEven += 1;
                currOdd = 1;
            } else if (arr[i] < arr[i-1]){
                currOdd += 1;
                currEven = 1;
            }
        }
        maxLen = Math.max(maxLen, currEven, currOdd);
    }
    return maxLen;
}; 