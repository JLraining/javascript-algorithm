/**
 * 插入排序
 * 从小到大排列
 * 1. 假设左边的队列已经完成排序, 从第二个数开始往前比
 * 2. 如果比前面的数小, 则把前面的数往后移动.
 *    此时如果比前面的数大，立即停止比较，因为前面的数据已经完成排序.
 * 3. 重复1，2，执行n-1轮
 */

/**
 * 时间复杂度为O(n^2)
 * 性能比较差, 一般实际情况下不会用到, 只有面试的时候会问
 */

 function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let j = i;
    while(j > 0) {
      if(arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
        j--
      } else {
        break;
      }
    }
  }
}

let arr = [6, 9, 3, 0, 9, 4, 1, 7, 0, 3, 2, 9, 8, 0, 9];
insertionSort(arr);
console.log(arr);
