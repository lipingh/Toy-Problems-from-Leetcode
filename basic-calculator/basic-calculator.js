/**
 * @param {string} s
 * @return {number}
 "(1+(4+5+2)-3)+(6+8)" -> stack = ['(',1,(,4,5]
 */
var calculate = function(s) {
    let stack = [];
    let operand = 0;
    let sign = 1;
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= '0' && s[i] <= '9') {
            operand = 10 * operand + parseInt(s[i]);
        } else if (s[i] === '+') {
            result += sign * operand;
            sign = 1;
            operand = 0;
        } else if (s[i] === '-') {
            result += sign * operand;
            sign = -1;
            operand = 0;
        }  else if (s[i] === '(') {
            // a new (), set result = 0, sign = 1
            stack.push(result);
            // previous sign '+' or '-'
            stack.push(sign);
            sign = 1;
            result = 0;
        }  else if (s[i] === ')') {
            result += sign * operand;
            // '+' or '-' this () result
            result *= stack.pop();
            result += stack.pop();
            operand = 0;
        }
    }
    return result + (sign * operand);
};