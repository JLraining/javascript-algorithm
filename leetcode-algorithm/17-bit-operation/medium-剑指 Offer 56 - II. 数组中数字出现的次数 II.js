// 在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。

//  

// 示例 1：

// 输入：nums = [3,4,3,3]
// 输出：4
// 示例 2：

// 输入：nums = [9,1,7,9,7,9,7]
// 输出：1




// 巧妙的位运算
// https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/solution/mian-shi-ti-56-ii-shu-zu-zhong-shu-zi-chu-xian-d-4/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let res = 0;
    for(let i = 0; i < 32; i++) {
      let cns = 0;
      let bit = 1 << i;
      for(let j = 0; j < nums.length; j++) {
          if(nums[j] & bit) {
              cns++;
          }
      }
      if(cns % 3 !== 0) {
          res = res | bit
      }
    }
    return res;
};