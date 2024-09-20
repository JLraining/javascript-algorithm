// 设计一个数组flat函数

function flat(arr, depth = 1) {
  if (depth < 1) return arr;
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      acc.push(...flat(val, depth - 1));
    } else {
      acc.push(val);
    }
    return acc;
  }, []);
}

// 使用示例
const nestedArray = [1, [2, [3, [4, [5]]]]];

console.log(flat(nestedArray)); // 默认深度为1，输出：[1, 2, [3, [4, [5]]]]
console.log(flat(nestedArray, 2)); // 深度为2，输出：[1, 2, 3, [4, [5]]]
console.log(flat(nestedArray, Infinity)); // 全部展开，输出：[1, 2, 3, 4, 5]

function flatIterative(arr, depth = 1) {
  const stack = [...arr.map((item) => [item, depth])];
  const result = [];

  while (stack.length > 0) {
    const [current, currentDepth] = stack.pop();
    if (Array.isArray(current) && currentDepth > 0) {
      stack.push(...current.map((item) => [item, currentDepth - 1]));
    } else {
      result.push(current);
    }
  }

  return result.reverse();
}

// 使用示例
const nestedArray2 = [1, [2, [3, [4, [5]]]]];

console.log(flatIterative(nestedArray2)); // 默认深度为1，输出：[1, 2, [3, [4, [5]]]]
console.log(flatIterative(nestedArray2, 2)); // 深度为2，输出：[1, 2, 3, [4, [5]]]
console.log(flatIterative(nestedArray2, Infinity)); // 全部展开，输出：[1, 2, 3, 4, 5]
