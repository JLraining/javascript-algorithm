/**
 * 题目描述:
 * 给你无向 连通 图中一个节点的引用，请你返回该图的 深拷贝（克隆）。
 * 图中的每个节点都包含它的值 val（int） 和其邻居的列表（list[Node]）。
 * class Node {
 *     public int val;
 *     public List<Node> neighbors;
 * }
 */

/**
 * 解题思路:
 * 图的深度和广度遍历
 * 用visited Map来记录边(neighbors)的映射关系
 * 时间 空间复杂度 O(n)
 */

// 深度优先
var cloneGraph = function (node) {
  if (!node) return;
  let visited = new Map();
  var dfs = (n) => {
    visited.set(n, new Node(n.val));
    n.neighbors.forEach((i) => {
      if (!visited.has(i)) {
        dfs(i);
      }
      visited.get(n).neighbors.push(visited.get(i));
    });
  };
  dfs(node);
  return visited.get(node);
};

// 广度优先
var cloneGraph = function (node) {
  if (!node) return;
  let visited = new Map();
  let queue = [node];
  visited.set(node, new Node(node.val));
  while (queue.length) {
    let n = queue.shift();
    n.neighbors.forEach((i) => {
      if (!visited.has(i)) {
        queue.push(i);
        visited.set(i, new Node(i.val));
      }
      visited.get(n).neighbors.push(visited.get(i));
    });
  }
  return visited.get(node);
};
