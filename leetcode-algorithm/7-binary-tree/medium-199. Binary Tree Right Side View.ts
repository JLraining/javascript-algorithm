// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
//  
// Example 1:
// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
// Example 2:
// Input: root = [1,null,3]
// Output: [1,3]
// Example 3:
// Input: root = []
// Output: []

/**
 * Definition for a binary tree node.
 */

 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }

 /**
  * solution
  * use bfs to solve this problem
  */
 function rightSideView(root: TreeNode | null): number[] {
    let res = [];
    if(!root) {
        return [];
    }
    let queue: Array<[TreeNode, number]> = [[root, 0]];
    while(queue.length) {
        let [n, layerIndex] = queue.shift();
        res[layerIndex] = n.val;
        n.left && queue.push([n.left, layerIndex + 1]);
        n.right && queue.push([n.right, layerIndex + 1]);
    }
    return res;
};
