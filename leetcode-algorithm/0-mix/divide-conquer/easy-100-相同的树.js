/**
 * 题目描述:
 * 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 * 示例 1：
 * 输入：p = [1,2,3], q = [1,2,3]
 * 输出：true
 */

/**
 * 解题思路:
 * 深度优先判断或者广度优先判断
 */

var isSameTree = function (p, q) {
  if (!p && !q) {
    return p === q;
  }
  if (!p || !q) {
    return false;
  }
  let q1 = [p];
  let q2 = [q];
  while (q1.length || q2.length) {
    let n1 = q1.length && q1.shift();
    let n2 = q2.length && q2.shift();
    if (!n2 || !n1) {
      return false;
    }
    if (n1.val !== n2.val) {
      return false;
    } else {
      if (n1.left && n2.left) {
        q1.push(n1.left);
        q2.push(n2.left);
      } else if (n1.left || n2.left) {
        return false;
      }
      if (n1.right && n2.right) {
        q1.push(n1.right);
        q2.push(n2.right);
      } else if (n1.right || n2.right) {
        return false;
      }
    }
  }
  return true;
};
