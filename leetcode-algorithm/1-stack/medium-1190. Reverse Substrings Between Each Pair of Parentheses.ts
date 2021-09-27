// You are given a string s that consists of lower case English letters and brackets. 
// Reverse the strings in each pair of matching parentheses, starting from the innermost one.
// Your result should not contain any brackets.


// Example 1:
// Input: s = "(abcd)"
// Output: "dcba"
// Example 2:
// Input: s = "(u(love)i)"
// Output: "iloveu"
// Explanation: The substring "love" is reversed first, then the whole string is reversed.
// Example 3:
// Input: s = "(ed(et(oc))el)"
// Output: "leetcode"
// Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.
// Example 4:
// Input: s = "a(bcdefghijkl(mno)p)q"
// Output: "apmnolkjihgfedcbq"

/**
 * It's a hot question.
 * solution 1:
 * use stack (I had hesitated for a long time at this step)
 * we traverse this string from left to right, use 'str' to record the characters at current layer, for current character:
 * 1. if meets "(", left Parentheses, it means the end of current layer, and the begining of next layer. put "str" into stack, and set "str" empty. 
 * 2. if meets ")", right Parentheses, reverse current "str" and return it to its parent layer. so, reverse current "str", then pop the top string of the stack, add the "str" to the end of the top string 
 * 3. if meets english alphabet, add it to the end of "str".
 * 
 * time complexity：O(n^2)
 * space complexity: O(n)
 */
 function reverseParentheses(s: string): string {
    let str = '';
    let stk: string[] = [];
    for(let ch of s) {
        if(ch === '(') {
            stk.push(str);
            str = '';
        } else if(ch === ")") {
            str = str.split("").reverse().join("")
            str = stk.pop() + str
        } else {
            str += ch
        }
    }
    return str
};

/**
 *  solution 2:
 *  use stack && reverse traverse ( resolve the time complexity of reverse() )
 *  Pretreat Parentheses, exchange the index of corresponding Parentheses. 
 *  https://leetcode-cn.com/problems/reverse-substrings-between-each-pair-of-parentheses/solution/zhan-dong-tu-yan-shi-by-xiaohu9527-hua8/
 */