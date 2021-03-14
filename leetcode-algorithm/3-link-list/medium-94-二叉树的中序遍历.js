/**
 * 题目描述: 给定一个二叉树的根节点 root，返回它的 中序 遍历。
 */

/**
 * 解题思路: 左右根。使用非递归实现 【背】
 */

var inorderTraversal = function (root) {
  if (!root) return [];
  let stack = [];
  let res = [];
  let p = root;

  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    let n = stack.pop();
    res.push(n.val);
    p = n.right;
  }

  return res;
};
