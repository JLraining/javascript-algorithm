// Given the root of a binary tree, turn the tree upside down and return the new root.
// You can turn a binary tree upside down with the following steps:
// The original left child becomes the new root.
// The original root becomes the new right child.
// The original right child becomes the new left child.
// The mentioned steps are done level by level. It is guaranteed that every right node has a sibling (a left node with the same parent) and has no children.

// Example 1:
// Input: root = [1,2,3,4,5]
// Output: [4,5,2,null,null,3,1]
// Example 2:

// Input: root = []
// Output: []
// Example 3:
// Input: root = [1]
// Output: [1]

/**
 * solution:
 * use postOrder
 */

/**
 * Definition for a binary tree node.
 */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function upsideDownBinaryTree(root: TreeNode | null): TreeNode | null {
    if (!root) {
        return null;
    }
    let p: TreeNode | null = null
    const postOrder = (node: TreeNode, parentNode: TreeNode | null) => {
        node.left && postOrder(node.left, node);
        node.right && postOrder(node.right, node);
        if (!p) { p = node };
        if (parentNode) {
            node.left = parentNode.right;
            node.right = parentNode;
            parentNode.left = null;
            parentNode.right = null;
        } else {
            node.left = null;
            node.right = null;
        }
    }

    postOrder(root, null);
    return p;
};
