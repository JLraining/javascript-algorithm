// Given an integer array nums, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.
//  
// Example 1:
// Input: nums = [2,2,3,4]
// Output: 3
// Explanation: Valid combinations are: 
// 2,3,4 (using the first 2)
// 2,3,4 (using the second 2)
// 2,2,3
// Example 2:

// Input: nums = [4,2,3,4]
// Output: 4


/**
 * solution
 * if use backTracking to solve this problem, it will beyond the time limit.
 * order + double pointer
 * fix one situation
 * then use two pointer: j & k.  find the biggest k to meet "nums[i] + nums[j] > nums[k]"
 * pay attetion to the doundary situation: number equal to zero.
 */

function triangleNumber(nums: number[]): number {
    let res:number = 0;
    nums = nums.sort((a,b) => a - b);
    for(let i:number = 0; i < nums.length; i++) {
        if(nums[i] == 0) {
            continue;
        }
        for(let j:number = i + 1; j < nums.length - 1; j++) {
            let k: number = j;
            while(k < nums.length && nums[k] < nums[i] + nums[j]) {
                k++;
            };
            res += k - j - 1
        }
    }
    return res;   
};