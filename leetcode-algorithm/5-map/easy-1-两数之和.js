/**
 * 思路：
 * 1. nums为相亲者们 target为匹配条件
 * 2. 用字典建立婚介所，存储数字和下标
 */

const nums = [1, 2, 10, 22, 7];
const target = 9;
// 假设每种输入只会有一种答案；预计返回 [1, 2]

const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const m = target - n;
    if (map.has(m)) {
      console.log(m, n);
      return [i, map.get(m)];
    } else {
      map.set(n, i);
    }
  }
};

twoSum(nums, target);
