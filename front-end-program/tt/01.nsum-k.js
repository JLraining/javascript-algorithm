// nsum 无序数组 取数相加和为M

// 回溯算法实现

function findNSum(nums, target) {
  const result = [];
  const path = [];

  function backtrack(start, remaining) {
    if (remaining === 0) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < nums.length; i++) {
      if (nums[i] > remaining) continue;
      path.push(nums[i]);
      backtrack(i + 1, remaining - nums[i]);
      path.pop();
    }
  }

  nums.sort((a, b) => a - b); // 先排序
  backtrack(0, target);
  return result;
}

// 示例
const nums = [2, 3, 6, 7];
const target = 9;

console.log(findNSum(nums, target)); // 输出：[[2, 7], [3, 6]]
