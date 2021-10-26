// 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
// 每行的元素从左到右升序排列。
// 每列的元素从上到下升序排列。
//  
// 示例 1：
// 输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// 输出：true
// 示例 2：
// 输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
// 输出：false

/**
 * solution:
 * 从矩阵 matrix 的右上角 (0, n-1) 进行搜索
 * 如果 matrix[x,y]=target，说明搜索完成；
 * 如果 matrix[x,y]>target，由于每一列的元素都是升序排列的，那么在当前的搜索矩阵中，所有位于第 y 列的元素都是严格大于 target 的，因此我们可以将它们全部忽略，即将 y 减少 1；
 * 如果 matrix[x,y]<target，由于每一行的元素都是升序排列的，那么在当前的搜索矩阵中，所有位于第 x 行的元素都是严格小于 target 的，因此我们可以将它们全部忽略，即将 x 增加 1。
 * 
 * complexity:
 * 时间复杂度：O(m + n)
 * 空间复杂度：O(1)
 */

function searchMatrix2(matrix: number[][], target: number): boolean {
    let m: number = matrix.length;
    let n: number = matrix[0].length;

    let i:number = 0;
    let j:number = n - 1;

    while(i < m && j >= 0) {
        if(matrix[i][j] === target) {
            return true;
        } else if(matrix[i][j] > target){
            j--;
        } else {
            i++;
        }
    }

    return false;
};
