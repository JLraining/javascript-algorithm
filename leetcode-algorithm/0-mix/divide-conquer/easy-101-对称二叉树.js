/**
 * 题目描述:
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 *     1
 *    / \
 *   2   2
 *  / \ / \
 * 3  4 4  3
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 *     1
 *    / \
 *   2   2
 *    \   \
 *    3    3
 */

/**
 * 解题思路:
 * 1. 一遍深度优先遍历。另一边相反深度优先遍历。
 * 2. 递归的方式做题的时候没有想到。在下面补充了
 */

var isSymmetric = function (root) {
  if (root.left && root.right) {
    var st1 = [root.left];
    var st2 = [root.right];
    while (st1.length || st2.length) {
      if (st1.length && st2.length) {
        var n1 = st1.pop();
        var n2 = st2.pop();
        if (n1.val === n2.val) {
          if (n1.right || n2.left) {
            if (n1.right && n2.left) {
              st1.push(n1.right);
              st2.push(n2.left);
            } else {
              return false;
            }
          }
          if (n1.left || n2.right) {
            if (n1.left && n2.right) {
              st1.push(n1.left);
              st2.push(n2.right);
            } else {
              return false;
            }
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  } else if (!root.left && !root.right) {
    return true;
  } else {
    return false;
  }
};

// 【递归的解法】
var isSymmetric2 = function (root) {
  var dfs = (n1, n2) => {
    if (!n1 && !n2) {
      return true;
    } else if (n1 && n2) {
      if (n1.val === n2.val) {
        return dfs(n1.left, n2.right) && dfs(n1.right, n2.left);
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  return dfs(root.left, root.right);
};
