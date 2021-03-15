/**
 * 图的优先遍历算法
 * 思路：
 *   1. 访问根节点
 *   2. 对根节点的没访问过的相邻节点依次进行深度优先遍历
 */
const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3],
};
const visited = new Set();
const dfs = (n) => {
  console.log(n);
  visited.add(n);
  graph[n] &&
    graph[n].forEach((item) => {
      if (!visited.has(item)) {
        dfs(item);
      }
    });
};
