// Given a string s, return the length of the longest substring that contains at most two distinct characters.

//  

// Example 1:

// Input: s = "eceba"
// Output: 3
// Explanation: The substring is "ece" which its length is 3.
// Example 2:

// Input: s = "ccaabbb"
// Output: 5
// Explanation: The substring is "aabbb" which its length is 5.


/**
 * solution
 * sliding window
 * 
 */
function lengthOfLongestSubstringTwoDistinct(s: string): number {
    if (!s) {
        return 0;
    }
    let p1: number = 0;
    let p2: number = 1;
    let res: number = 1;
    let preS: [string, number] = ['', -1];

    while (p2 < s.length) {
        if (s[p2] !== s[p2 - 1]) {
            if (!preS[0] || s[p2] === preS[0]) {
                preS = [s[p2 - 1], p2 - 1]
            } else {
                p1 = preS[1] + 1;
                preS = [s[p2 - 1], p2 - 1];
            }
        }
        res = Math.max(res, p2 - p1 + 1)
        p2++;
    }
    return res;
};