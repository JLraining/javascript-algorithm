// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
// Example 1:
// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]
// Example 2:
// Input: preorder = [-1], inorder = [-1]
// Output: [-1]


/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 * It's very hot 
 * find the regular pattern， use recursion to implement
 */
 function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if(!preorder || !preorder.length || !inorder || !inorder.length) {
        return null;
    }
    const cur: number = preorder.shift();
    const curNode: TreeNode = new TreeNode(cur);
    const inIndex: number = inorder.findIndex(i => cur === i);
    curNode.left = buildTree(preorder, inorder.slice(0, inIndex));
    curNode.right = buildTree(preorder, inorder.slice(inIndex + 1));
    return curNode;
};