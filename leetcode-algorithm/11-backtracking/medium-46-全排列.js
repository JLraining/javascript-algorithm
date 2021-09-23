/**
 * 题目描述:
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 * 示例:
 * 输入: [1,2,3]
 * 输出:
 * [
 *   [1,2,3],
 *   [1,3,2],
 *   [2,1,3],
 *   [2,3,1],
 *   [3,1,2],
 *   [3,2,1]
 * ]
 */

/**
 * 解题思路: 
 * 递归模拟所有的情况
 * 遇到重复包含的元素 就回溯
 * 收集达到终点的元素，并返回
 * 注意此处数组要返回path.concat[新数组] 而不能path.push[相同引用]
 * 
 * 【此处的时间复杂度需要特别注意！】 时间复杂度 o(n!) = 1x2x3......xn
 * 空间复杂度 o(n)
 */

var permute = function (nums) {
  let res = [];
  var backtrack = (path) => {
    if (path.length === nums.length) {
      res.push(path);
      return;
    }
    nums.forEach((i) => {
      if (path.includes(i)) {
        return;
      }
      backtrack(path.concat(i));
    });
  };
  backtrack([]);
  return res;
};
