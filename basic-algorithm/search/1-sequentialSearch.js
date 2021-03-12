/**
 * 顺序搜索
 * 时间复杂度O(n)
 */

const sequentialSearch = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
    break;
  }
  return -1;
};
