// 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。
// 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
// 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
// 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。
// 示例 1：
// 输入：text1 = "abcde", text2 = "ace" 
// 输出：3  
// 解释：最长公共子序列是 "ace" ，它的长度为 3 。
// 示例 2：
// 输入：text1 = "abc", text2 = "abc"
// 输出：3
// 解释：最长公共子序列是 "abc" ，它的长度为 3 。
// 示例 3：
// 输入：text1 = "abc", text2 = "def"
// 输出：0
// 解释：两个字符串没有公共子序列，返回 0 。

/**
 * [重要] 最长公共子序列问题是 典型的二维动态规划问题
 * https://leetcode-cn.com/problems/qJnOS7/solution/zui-chang-gong-gong-zi-xu-lie-by-leetcod-ugg7/
 * 时间复杂度：O(mn)
 * 空间复杂度：O(mn)
 */

 function longestCommonSubsequence(text1: string, text2: string): number {
    let dn: number[][] = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0));

    for(let i: number = 1; i <= text1.length; i++) {
        for(let j: number = 1; j <= text2.length; j++) {
            if(text1[i - 1] === text2[j - 1]) {
                dn[i][j] = dn[i - 1][j - 1] + 1;
            } else {
                dn[i][j] = Math.max(dn[i - 1][j], dn[i][j - 1])
            }
           
        }
    }

    return dn[text1.length][text2.length];
};
