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

export default function depthFirstSearch(graph, source) {
  // If there are no nodes in the graph, just return an empty array
  if (Object.keys(graph).length === 0) {
    return [];
  }

  // Initialize a set that tracks visited nodes.
  const visited = new Set();

  function traverse(node) {
    // Visited before, we can ignore.
    if (visited.has(node)) {
      return;
    }

    visited.add(node);
    // Recursively visit each neighbor.
    graph[node].forEach((neighbor) => {
      traverse(neighbor);
    });
  }

  // Start traversing from the source.
  traverse(source);

  // The visited nodes is the traversal order.
  return Array.from(visited);
}
