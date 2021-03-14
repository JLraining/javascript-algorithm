/**
 * 题目描述:
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
 * 示例 1：
 * 输入：root = [1,null,2,3]
 * 输出：[1,2,3]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 【非递归】
var preorderTraversal = function (root) {
  let res = [];
  let stack = [];
  if (root) stack.push(root);

  while (stack.length) {
    let node = stack.pop();
    res.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
};

// 【递归】
var preorderTraversal2 = function (root) {
  if (!root) return;
  let res = [];
  res.push(root.val);
  root.left && preorderTraversal(root.left);
  root.right && preorderTraversal(root.right);
};
