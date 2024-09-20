// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。
// https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/description/
// 参考以下这颗二叉搜索树：
//      5
//     / \
//    2   6
//   / \
//  1   3
// 示例 1：
// 输入: [1,6,3,2,5]
// 输出: false
// 示例 2：
// 输入: [1,3,2,6,5]
// 输出: true

const verifyPreorder = function (preorder, min = null, max = null) {
  if (!preorder.length) return;
  let val = preorder[0];
  if ((min && val <= min) || (max && val >= max)) return;
  preorder.shift();
  verifyPreorder(preorder, min, val);
  verifyPreorder(preorder, val, max);
  return !preorder.length;
};
