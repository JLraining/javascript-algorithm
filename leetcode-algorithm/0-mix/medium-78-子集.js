/**
 * 题目描述:
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。 
 * 示例 1：
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 示例 2：
 * 输入：nums = [0]
 * 输出：[[],[0]]
 */

/**
 * 解题思路:
 * 1. 使用回溯
 * 2. 每次接的数字都是后面的数字
 * 时间复杂度O(2^N) 空间复杂度O(N)
 */

var subsets = function(nums) {
    let res = [];
    let backTrack = (path, l, start) => {
        if(path.length === l){
            res.push(path);
            return;
        }
        for(let i = start; i < nums.length; i++) {
            backTrack(path.concat(nums[i]), l, i + 1)
        }
    };
  
    for(let i = 0; i <= nums.length ; i++){
        backTrack([], i, 0)
    }
    return res
  };