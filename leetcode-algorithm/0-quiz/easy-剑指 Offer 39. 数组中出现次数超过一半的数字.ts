// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
//  
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
//  
// 示例 1:
// 输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
// 输出: 2
//  
// 限制：
// 1 <= 数组长度 <= 50000


// 使用摩尔根投票法
/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let ans;
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        if(!ans) {
             ans = nums[i];
             count++
        } else if(nums[i] === ans) {
            count++
        } else {
            count--
            ans = count > 0 ?  ans : '';
        }
    }

    return ans
};