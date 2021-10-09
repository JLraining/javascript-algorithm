// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
//  
// Example 1:
// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
// Example 2:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 3:
// Input: nums = [1,2,3]
// Output: 3

/**
 * solution:
 * dynamic program
 * pay attention to the solution of the circle, dispart it into two group
 */
function rob(nums: number[]): number {
    if(!nums.length) {
        return 0;
    }
    if(nums.length === 1) {
        return nums[0];
    }
    if(nums.length === 2) {
        return Math.max(nums[0], nums[1]); 
    }
    
    const robHouse = (start: number, end: number): number => {
        let d1:number = nums[start];
        let d2:number = Math.max(nums[start], nums[start + 1]);
        for(let i:number = start + 2; i <= end; i++) {
            let temp: number = d1;
            d1 = d2;
            d2 = Math.max(nums[i] + temp, d2);
        }
        return d2;
    }
    return Math.max(robHouse(0, nums.length - 2), robHouse(1, nums.length - 1));
};