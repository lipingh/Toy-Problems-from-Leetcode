/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
// for each digit, num[i]
//  no operator, curr * 10 + num[i] -> edge case, previous was 0
//  '+'
//  '-' 
//  '*', += curr * num[i]
var addOperators = function(num, target) {
    let answers = [];
    const helper = (index, prev, curr, value, ops) => {
        // base case
        if (index === num.length) {
            if(value === target && curr === 0) {
                answers.push(ops.slice(1).join(''));
            }
            return;
        }
        curr = curr * 10 + parseInt(num[index]);
        if (curr) {
            // can't start with 0
            helper(index+1, prev, curr, value, ops);
        }
        
        ops.push('+');
        ops.push(curr);
        helper(index+1, curr, 0, value+curr, ops);
        ops.pop();
        ops.pop();
        
        if(ops.length) {
            ops.push('-');
            ops.push(curr);
            helper(index+1, -curr, 0, value-curr, ops);
            ops.pop();
            ops.pop();
            
            ops.push('*');
            ops.push(curr);
            helper(index+1, curr*prev, 0, value-prev +(curr*prev), ops);
            ops.pop();
            ops.pop();
        } 
    };
    helper(0, 0, 0, 0, []);
    return answers;
};