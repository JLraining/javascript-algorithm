// 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
// 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
// 示例 1：
// 输入：nums = [1,2,2]
// 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
// 示例 2：
// 输入：nums = [0]
// 输出：[[],[0]]

/**
 * 【解题思路】
 * 回溯法
 * 数组先排序
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let res = [];
  nums = nums.sort((a, b) => a - b);
  var backtrack = function (path, length, start) {
    if (path.length === length) {
      res.push(path);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      // 注意这个地方
      if (i === start || (i > start && nums[i] > nums[i - 1])) {
        backtrack(path.concat(nums[i]), length, i + 1);
      }
    }
  };
  for (let i = 0; i <= nums.length; i++) {
    backtrack([], i, 0);
  }
  return res;
};
