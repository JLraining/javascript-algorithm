/**
 * 题目描述:
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。
 * 示例 1：
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶

 * 示例 2：
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 */

/**
 * 解题思路:
 * 使用动态规划
 */

var climbStairs = function (n) {
  var d = [1, 2];
  for (let i = 2; i < n; i++) {
    d[i] = d[i - 1] + d[i - 2];
  }
  return d[n - 1];
};

// 【优化】
var climbStairs = function (n) {
  var d0 = 1;
  var d1 = 2;
  if (n === 1) {
    return d0;
  }
  for (let i = 2; i < n; i++) {
    let temp = d0;
    d0 = d1;
    d1 = d0 + temp;
  }
  return d1;
};

// 【递归实现】- 不要写，容易超出时间限制
var climbStairs = function (n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  return climbStairs(n - 1) + climbStairs(n - 2);
};
