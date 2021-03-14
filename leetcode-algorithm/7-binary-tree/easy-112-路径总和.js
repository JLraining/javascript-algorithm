/**
 * 题目描述:
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。
 * 叶子节点 是指没有子节点的节点。
 * 示例 1：
 * 输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
 * 输出：true
 * 示例 2：
 * 输入：root = [1,2,3], targetSum = 5
 * 输出：false
 */

/**
 * 解题思路:
 * 深度优先遍历
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }
  let res = false;
  const dfs = (n, sum) => {
    sum = sum + n.val;
    if (n.left) {
      dfs(n.left, sum);
    }
    if (n.right) {
      dfs(n.right, sum);
    }
    if (!n.left && !n.right && targetSum == sum) {
      res = true;
    }
  };
  dfs(root, 0);
  return res;
};
