// medium-3-Longest Substring Without Repeating Characters.ts
// Given a string s, find the length of the longest substring without repeating characters.
// 
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:
// Input: s = ""
// Output: 0

/**
 * solution:
 * use map && sliding window
 * pay attention to the use of map that record the index of the char
 */

 function lengthOfLongestSubstring2(s: string): number {
    if (!s) {
        return 0;
    }

    let p1: number = 0;
    let p2: number = 0;
    let map: Map<string, number> = new Map();
    let res: number = 1;
    map.set(s[0], 0);

    while (p2 < s.length - 1) {
        p2++;
        // this condition is vital
        if (map.has(s[p2]) && map.get(s[p2]) >= p1) {
            p1 = map.get(s[p2]) + 1;
        }
        map.set(s[p2], p2);
        res = Math.max(res, p2 - p1 + 1);
    }

    return res;
};
