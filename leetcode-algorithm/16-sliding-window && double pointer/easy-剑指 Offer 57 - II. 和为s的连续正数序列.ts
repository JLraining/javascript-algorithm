// 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。

// 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

//  

// 示例 1：

// 输入：target = 9
// 输出：[[2,3,4],[4,5]]
// 示例 2：

// 输入：target = 15
// 输出：[[1,2,3,4,5],[4,5,6],[7,8]]


// 滑动窗口 + 双指针
var findContinuousSequence = function(target) {
    let res = [];

    for(let i = 1; i <= Math.floor(target / 2); i++) {
        let sum = i;
        let cur = [i];
        for(let j = i + 1; j <= Math.ceil(target / 2); j++) {
            sum += j;
            cur.push(j);
            if(sum === target) {
                res.push(cur);
                break;
            }
            if(sum > target) {
                break;
            }
        }
    }
    return res;
};