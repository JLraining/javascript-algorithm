// 给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。
//  
// 示例 1:
// 输入: nums = [0,1]
// 输出: 2
// 说明: [0, 1] 是具有相同数量 0 和 1 的最长连续子数组。
// 示例 2:
// 输入: nums = [0,1,0]
// 输出: 2
// 说明: [0, 1] (或 [1, 0]) 是具有相同数量0和1的最长连续子数组。

/**
 * 前缀和 + 哈希表
 * https://leetcode-cn.com/problems/contiguous-array/solution/lian-xu-shu-zu-by-leetcode-solution-mvnm/
 * 
 * 由于「0 和 1 的数量相同」等价于「1 的数量减去 0 的数量等于 0」，我们可以将数组中的 0 视作 -1，则原问题转换成「求最长的连续子数组，其元素和为 0」
 */

function findMaxLength(nums: number[]): number {
    let prefixNums: number[] = new Array(nums.length).fill(0);
    let prefixMap: Map<number, number> = new Map();
    let res: number = 0;

    for (let i: number = 0; i < nums.length; i++) {
        let n: number = nums[i] === 0 ? -1 : 1;
        prefixNums[i] = i === 0 ? n : prefixNums[i - 1] + n;
        if (prefixNums[i] === 0) {
            res = i + 1;
        } else if (prefixMap.has(prefixNums[i])) {
            res = Math.max(i - prefixMap.get(prefixNums[i]), res);
        } else {
            prefixMap.set(prefixNums[i], i);
        }
    }
    return res;
};


// [官方解答]
var findMaxLength2 = function(nums) {
    let maxLength = 0;
    const map = new Map();
    let counter = 0;
    map.set(counter, -1);
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        const num = nums[i];
        if (num == 1) {
            counter++;
        } else {
            counter--;
        }
        if (map.has(counter)) {
            const prevIndex = map.get(counter);
            maxLength = Math.max(maxLength, i - prevIndex);
        } else {
            map.set(counter, i);
        }
    }
    return maxLength;
};
