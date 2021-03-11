/**
 * 树的深度优先遍历 【递归实现】
 * 思路：
 *   1. 访问根节点
 *   2. 对根节点的子节点依次进行深度优先遍历
 */

 const dfs = (root) => {
    console.log(root.val);
    root.children && root.children.forEach(dfs);
 }