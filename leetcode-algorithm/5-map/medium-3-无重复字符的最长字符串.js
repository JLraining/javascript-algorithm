/**
 * 题目描述:
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 示例 :
 *  输入: s = "abcabcbb"
 *  输出: 3
 *  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */

/**
 * 思路:
 *   1. 用双指针维护一个滑动窗口, 用来剪切子串
 *   2. 不断移动右指针, 如果遇到重复字符并且该重复字符的位置在左指针后面, 就把左指针移动到重复字符的下一位
 *   3. 更新map当前记录字符串
 *   4. 刷新记录保留的字符串长度, 不断和上次比较, 保留最大值
 */

var lengthOfLongestSubstring = function (s) {
  let p1 = 0;
  const map = new Map();
  let res = 0;
  for (let p2 = 0; p2 < s.length; p2++) {
    if (map.has(s[p2]) && map.get(s[p2]) >= p1) {
      p1 = map.get(s[p2]) + 1;
    }
    res = Math.max(res, p2 - p1 + 1);
    map.set(s[p2], p2);
  }

  return res;
};


