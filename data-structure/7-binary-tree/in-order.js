/**
 * 二叉树的中序遍历
 * 思路：
 * 1. 左子树中序遍历
 * 2. 访问根节点
 * 3. 右子树中序遍历
 */

// 【递归实现】
const inOrder = (root) => {
  root.left && inOrder(root.left);
  console.log(root.val);
  root.right && inOrder(root.right);
};

// 【非递归实现】
const inOrder2 = (root) => {
  if (!root) {
    return;
  }
  const stack = [];
  let p = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const n = stack.pop();
    console.log(n.val);
    p = n.right;
  }
};
