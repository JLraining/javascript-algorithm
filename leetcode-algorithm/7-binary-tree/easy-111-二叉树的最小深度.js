/**
 * 题目描述:
 * 给定一个二叉树，找出其最小深度。
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 说明：叶子节点是指没有子节点的节点。
 * 示例 1：
 * 输入：root = [3,9,20,null,null,15,7]
 * 输出：2
 * 示例 2：
 * 输入：root = [2,null,3,null,4,null,5,null,6]
 * 输出：5
 */

/**
 * 解题思路:
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
 * @return {number}
 */
var minDepth = function(root) {
    if(!root){return 0}
    let queue = [[root, 1]];
    while(queue.length) {
        let [n ,i] = queue.shift();
        if(!n.left && !n.right) {
            return i
        }
        if(n.left) {queue.push([n.left, i+1])};
        if(n.right) {queue.push([n.right, i+1])}
    }
};