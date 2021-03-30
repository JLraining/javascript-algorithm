// 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

// 每行中的整数从左到右按升序排列。
// 每行的第一个整数大于前一行的最后一个整数。
//  

// 示例 1：


// 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// 输出：true
// 示例 2：


// 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// 输出：false
 
/**
 * 解题思路：
 * 两次二分搜索
 */


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length - 1;
    const n = matrix[0].length - 1;
    if(matrix[0][0] > target || matrix[m][n] < target) {
        return false
    }

    let minY = 0;
    let maxY = m;
    let middle = 0;
    while(minY <= maxY) {
        let middle = Math.floor((minY + maxY)/2);
        if( matrix[middle][0] === target ) {
            return true;
        } else if(matrix[middle][0] > target){
            maxY = middle - 1;
        } else {
            minY = middle + 1;
        }
    }
    middle = minY - 1
    let minX = 0;
    let maxX = n;
    while(minX <= maxX) {
        let middleX = Math.floor((minX + maxX)/2);
        if( matrix[middle][middleX] === target ) {
            return true;
        } else if(matrix[middle][middleX] > target){
            maxX = middleX - 1;
        } else {
            minX = middleX + 1;
        }
    }
    return false;
};