// Given a list of non-negative integers nums, arrange them such that they form the largest number.
// Note: The result may be very large, so you need to return a string instead of an integer.

// Example 1:
// Input: nums = [10,2]
// Output: "210"
// Example 2:
// Input: nums = [3,30,34,5,9]
// Output: "9534330"
// Example 3:
// Input: nums = [1]
// Output: "1"
// Example 4:
// Input: nums = [10]
// Output: "10"

/**
 * [hot leetcode question]
 * solution
 * order: if two number first bit is equal, combine the data and exchange the order, find the bigger one.
 * [pay attention to the boundary condition that only zero in the array]
 */

function largestNumber(nums: number[]): string {
    nums = nums.sort((a: number, b: number) => {
        if(`${a}`[0] !== `${b}`[0]) {
            return Number(`${b}`[0]) - Number(`${a}`[0])
        } else {
            return  Number(`${b}${a}`) - Number(`${a}${b}`) 
        }
    });    
    if(nums[0] === 0) {
        return "0"
    }
    return nums.join("");
};