// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.
// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:
// Input: nums = [1]
// Output: 1
// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23


function maxSubArray(nums: number[]): number {
    let res: number;
    if(nums.length === 1) {
        return nums[0]
    } 
    if(nums.length === 2) {
        return Math.max(nums[0], nums[1], nums[0] + nums[1])
    } 
    let d0 = nums[0];
    let d1 = Math.max(nums[1], nums[0] + nums[1]);
    res = Math.max(d0, d1)
    for(let i: number = 2; i < nums.length; i++) {
        let temp = d1;
        d1 = Math.max(nums[i], nums[i] + temp, nums[i] + nums[i - 1] + d0);
        res = Math.max(d1, res);
        d0 = temp;
    }
    return res;
};


// The offical solution: 
// var maxSubArray = function(nums) {
//     let pre = 0, maxAns = nums[0];
//     nums.forEach((x) => {
//         pre = Math.max(pre + x, x);
//         maxAns = Math.max(maxAns, pre);
//     });
//     return maxAns;
// };
