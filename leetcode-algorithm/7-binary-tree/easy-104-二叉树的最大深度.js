/**
 * 题目描述
 * 给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 说明: 叶子节点是指没有子节点的节点。
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 返回它的最大深度 3 。
 */

/**
 * 解题思路：
 *  使用深度优先遍历。
 *  使用一个变量记录节点层级, 不断刷新, 返回最大的节点层级
 */

var maxDepth = function (root) {
  let res = 0;
  const dfs = (root, n) => {
    if (!root) {
      return;
    }
    if (!root.left && !root.right) {
      res = Math.max(n, res);
      return;
    }
    dfs(root.left, n + 1);
    dfs(root.right, n + 1);
  };
  dfs(root, 1);
  return res;
};
