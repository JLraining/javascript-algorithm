// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

// Example 1:
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]

// Constraints:
// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.

// airwallex 面试碰到的 思路是对的 当时边界条件没对 问题在于i和2交换的时候 i不能++。。。。。

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  if (!nums || !nums.length) {
    return [];
  }

  let p1 = 0;
  let p2 = nums.length - 1;
  let i = 0;

  while (i <= p2) {
    if (nums[i] === 0) {
      [nums[i], nums[p1]] = [nums[p1], nums[i]];
      p1++;
      i++;
    } else if (nums[i] === 2) {
      [nums[i], nums[p2]] = [nums[p2], nums[i]];
      p2--;
    } else {
      i++;
    }
  }
};
