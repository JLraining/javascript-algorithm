// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).
//  
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
// Example 2:
// Input: root = [1]
// Output: [[1]]
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
  * solution:
  * bfs 
  * time complexity: O(n)
  * space complexity: O(n)
  */
 function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if(!root) {
        return [];
    }
    let queue: [TreeNode, number][] = [[root, 0]];
    let res: number[][] = [];

    while(queue.length) {
      let [n, idx] = queue.shift();
      res[idx] = res[idx] || [];
       if(idx % 2) {
           res[idx].unshift(n.val);
       } else {
           res[idx].push(n.val); 
       }
       n.left && queue.push([n.left, idx + 1]);
       n.right && queue.push([n.right, idx + 1]);
    }

    return res;
};