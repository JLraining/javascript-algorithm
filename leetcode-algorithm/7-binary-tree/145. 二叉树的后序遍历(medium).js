/**
 * 二叉树的后序遍历
 * 思路：
 * 1. 左子树后序遍历
 * 2. 右子树后序遍历
 * 3. 访问根节点
 */

// 【递归实现】
const postOrder = (root) => {
    root.left && postOrder(root.left);
    root.right && postOrder(root.right);
    console.log(root.val);
  };
  
  // 【非递归实现】
  const postOrder2 = (root) => {
    if (!root) {
      return;
    }
    const stack = [root];
    const outputStack = [];
  
    while (stack.length) {
      const n = stack.pop();
      outputStack.push(n);
      n.left && stack.push(n.left);
      n.right && stack.push(n.right);
    }
  
    while (outputStack.length) {
      const n = outputStack.pop();
      console.log(n.val);
    }
  };
  