// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
// Return the sum of the three integers.
// You may assume that each input would have exactly one solution.
// Example 1:
// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:
// Input: nums = [0,0,0], target = 1
// Output: 0

/**
 * solution:
 * same to No.15 3sum
 * order + double pointer
 * find every num closet outcome in turn
 * find the closet instance
 */

function threeSumClosest(nums: number[], target: number): number {
    nums = nums.sort((a, b) => a - b);
    let instance: number = Infinity;
    for (let i: number = 0; i < nums.length - 2; i++) {
        let p1: number = i + 1;
        let p2: number = nums.length - 1;
        let sum: number;
        while (p1 < p2) {
            sum = nums[p1] + nums[p2] + nums[i];
            if (sum === target) {
                return target;
            } else if (sum > target) {
                p2--;
            } else {
                p1++;
            }
            instance = Math.abs(sum - target) < Math.abs(instance) ? sum - target : instance;
        }
    }

    return target + instance;
};