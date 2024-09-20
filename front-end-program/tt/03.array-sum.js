// 数组求和;

function sumArray(arr) {
  let sum = 0;

  for (const item of arr) {
    if (Array.isArray(item)) {
      // 如果是数组，递归调用
      sum += sumArray(item);
    } else if (typeof item === "number") {
      // 如果是数字，直接加到总和
      sum += item;
    } else if (typeof item === "string" && !isNaN(parseFloat(item))) {
      // 如果是可以转换为数字的字符串，转换并加到总和
      sum += parseFloat(item);
    } else if (item === null || item === undefined) {
      // 忽略 null 和 undefined
      console.warn(`忽略无效值: ${item}`);
    } else {
      // 处理其他异常情况
      console.warn(`忽略非数字类型: ${item}`);
    }
  }

  return sum;
}

// 示例
const numbers = [1, [2, [3, "4.5"], "5"], null, [6, undefined, [7, 8]]];
console.log(sumArray(numbers)); // 输出：36.5
