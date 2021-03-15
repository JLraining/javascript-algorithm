/**
 * 题目描述:
 * 翻转一棵二叉树。
 * 示例：
 * 输入：
 *      4
 *    /   \
 *   2     7
 *  / \   / \
 * 1   3 6   9
 */

/**
 * 解题思路: 
 * 递归翻转
 */

var invertTree = function(root) {
    if(!root) return null;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    if(root.left) { invertTree(root.left)}
    if(root.right) { invertTree(root.right)}
    return root
};