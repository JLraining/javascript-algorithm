/**
 * 二分搜索(前提是数组是有序的，假设从小到大排列)
 * 时间复杂度 O(logn)
 * 1. 从数组中间值开始搜索, 如果目标值等于中间值, 返回目标值位置
 * 2. 如果中间值大于目标值, 则从左边这半搜索, 否则从右边这半搜索
 */

 const binarySearch = (arr, item) => {
  if (!arr.length) return -1;
  let max = arr.length - 1;
  let min = 0;
  while(max >= min) {
    let mid = Math.floor((max + min)/2);
    if(arr[mid] === item) {
      return mid
    } else if (arr[mid] > item) {
       max = mid - 1;
    } else {
       min = mid + 1;
    }
  }
  return -1
}
binarySearch([1,2,3,5,5,6,7,9], 0)
