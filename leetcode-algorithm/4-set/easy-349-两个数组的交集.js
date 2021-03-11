/**
 * 思路：
 * 1.对数组1进行去重
 * 2.遍历数组1, 筛选在数组2也存在的值
 */
const num1 = [1, 2, 2, 1];
const num2 = [2, 2];

const intersection = function (num1, num2) {
  return [...new Set(num1)].filter((item) => num2.includes(item));
};
