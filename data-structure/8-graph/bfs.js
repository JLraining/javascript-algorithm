/**
 * 图的广度遍历算法
 * 思路：
 *   1. 新建一个队列，把根节点入队, 设置已经标记入队
 *   2. 把队头出队并访问
 *   3. 把队头的相邻节点 并且不在队列中的节点 入队
 *   4. 重复2，3. 直到队列为空
 */
const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3],
};

const visited = new Set();

const bfs = (root) => {
  const queue = [];
  queue.push(root);
  const visited = new Set([root]);

  while (queue.length) {
    const n = queue.shift();
    console.log(n);
    graph[n].forEach((item) => {
      if (!visited.has(item)) {
        queue.push(item);
        visited.add(n);
      }
    });
  }
};

// 【错误示范】 问题在于可能重复入队. 应该在入队的时候就判断visited
const bfs2 = (root) => {
  const queue = [];
  queue.push(root);
  const visited = new Set();

  while (queue.length) {
    const n = queue.shift();
    console.log(n);
    visited.add(n);
    graph[n].forEach((item) => {
      if (!visited.has(item)) {
        queue.push(item);
      }
    });
  }
};
