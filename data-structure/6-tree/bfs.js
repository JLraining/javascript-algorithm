/**
 * 树的广度优先遍历 【队列】
 * 思路：
 *   1. 根节点入队
 *   2. 队头出队并访问
 *   3. 对头的子节点入队
 *   4. 重复2，3直到队列为空
 */
const bfs = (root) => {
  const queue = [];
  queue.push(root);
  while (queue.length) {
    const node = queue.shift();
    console.log(node.val);
    node.children && node.children.forEach((item) => queue.push(item));
  }
};
