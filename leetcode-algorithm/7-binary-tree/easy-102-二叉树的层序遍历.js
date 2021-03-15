/**
 * 题目描述:
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 * 示例：
 * 二叉树：[3,9,20,null,null,15,7],
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 返回其层序遍历结果：
 * [
 *   [3],
 *   [9,20],
 *   [15,7]
 * ]
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [[root, 0]];
  let res = [];
  while (queue.length) {
    let [n, i] = queue.shift();
    res[i] ? res[i].push(n.val) : res.push([n.val]);
    if (n.left) {
      queue.push([n.left, i + 1]);
    }
    if (n.right) {
      queue.push([n.right, i + 1]);
    }
  }
  return res;
};
