/**
 * 题目描述:
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 * 注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。
 * 示例 1：
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 * 示例 2：
 * 输入：s = "a", t = "a"
 * 输出："a"
 */

/**
 * 解题思路:
 * 滑动窗口
 * 注意t里的字符串可能有重复的地方
 */

var minWindow = function (s, t) {
  let p1 = 0;
  let p2 = 0;
  let res = "";
  let map = new Map();

  for (let i = 0; i < t.length; i++) {
    if (map.has(t[i])) {
      map.set(t[i], map.get(t[i]) + 1);
    } else {
      map.set(t[i], 1);
    }
  }
  let needType = map.size;
  while (p2 < s.length) {
    if (map.has(s[p2])) {
      map.set(s[p2], map.get(s[p2]) - 1);
      if (map.get(s[p2]) === 0) {
        needType = needType - 1;
      }
    }

    while (needType === 0) {
      res = res && p2 - p1 + 1 > res.length ? res : s.slice(p1, p2 + 1);

      if (map.has(s[p1])) {
        map.set(s[p1], map.get(s[p1]) + 1);
        if (map.get(s[p1]) === 1) {
          needType = needType + 1;
        }
      }
      p1++;
    }

    p2++;
  }
  return res;
};
