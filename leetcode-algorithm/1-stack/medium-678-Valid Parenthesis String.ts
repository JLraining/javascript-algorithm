
// Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.
// The following rules define a valid string:
// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
//  
// Example 1:
// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "(*)"
// Output: true
// Example 3:
// Input: s = "(*))"
// Output: true


/**
 * solution 1: stack
 */
function checkValidString(s: string): boolean {
    let xStack: number[] = [];
    let stack: number[] = [];

    for (let i: number = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i)
        } else if (s[i] === '*') {
            xStack.push(i);
        } else {
            if (stack.length > 0) {
                stack.pop();
            } else if (xStack.length > 0) {
                xStack.pop();
            } else {
                return false;
            }
        }
    }

    // judge that if the left "(" is legal or not, and the order of "*" and "("is very important
    while (stack.length && stack.length <= xStack.length) {
        let i: number = stack[0];
        let j: number = xStack.shift();

        while (j < i && xStack.length) {
            j = xStack.shift();
        }

        if (i < j) {
            stack.shift()
        }
    }

    // The Official solution :

    // while (leftStack.length && asteriskStack.length) {
    //     const leftIndex = leftStack.pop();
    //     const asteriskIndex = asteriskStack.pop();
    //     if (leftIndex > asteriskIndex) {
    //         return false;
    //     }
    // }
    return stack.length === 0;
};