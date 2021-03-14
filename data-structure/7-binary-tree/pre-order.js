/**
 * 二叉树的先序遍历 // 深度优先
 * 思路：
 * 1. 访问根节点
 * 2. 左子树先序遍历
 * 3. 右子树先序遍历
 */

 // 【递归实现】
 const preOrder = (root) => {
    console.log(root.val);
    root.left && preOrder(root.left);
    root.right && preOrder(root.right);
 }

 // 【非递归实现】
const preOrder2 = (root) => {
    const stack = [];
    stack.push(root);
    while(stack.length) {
        const n = stack.pop();
        console.log(n.val);
        n.right && stack.push(n.right);
        n.left && stack.push(n.left);
    }
}