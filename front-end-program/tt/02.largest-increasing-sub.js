// 最长严格递增子序列
// https://leetcode.com/problems/longest-increasing-subsequence

// 动态规划实现
function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;

  const dp = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

// 示例
const nums1 = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums1)); // 输出：4, 对应的最长递增子序列是 [2, 3, 7, 101]

// 优化：二分查找
// 如果需要进一步优化，可以结合二分查找来实现时间复杂度为 O(n log n) 的解决方案。这种方法利用一个数组 tails，其中 tails[i] 表示长度为 i+1 的递增子序列的最后一个元素的最小值。
function lengthOfLIS(nums) {
  const tails = [];
  for (const num of nums) {
    let left = 0,
      right = tails.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    if (right === tails.length) {
      tails.push(num);
    } else {
      tails[right] = num;
    }
  }
  return tails.length;
}

// 示例
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums)); // 输出：4, 对应的最长递增子序列是 [2, 3, 7, 101]
