// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.
// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:
// Input: nums = []
// Output: []
// Example 3:
// Input: nums = [0]
// Output: []


function threeSum(nums: number[]): number[][] {
    let res: Array<number[]> = [];
    if (!nums || (nums && nums.length < 3)) {
        return [];
      }
      const arr = nums.sort((a, b) => a - b);
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
          continue;
        }
        let p1 = i + 1; 
        let p2 = arr.length - 1;
        while (p2 > p1) {
          if (arr[i] === -(arr[p1] + arr[p2])) {
            res.push([arr[i], arr[p1], arr[p2]]);
            while (arr[p1] === arr[p1 + 1]) {
              p1++;
            }
            while (arr[p2] === arr[p2 + 1]) {
              p2--;
            }
            p1++;
            p2--;
          } else if (arr[i] > -(arr[p1] + arr[p2])) {
            p2--;
          } else {
            p1++;
          }
        }
      }
    return res;
};