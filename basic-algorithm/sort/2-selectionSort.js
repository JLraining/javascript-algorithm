/**
 * 选择排序
 * 从小到大排列
 * 1. 选择最小的值，放在第一位，和当前第一位交换位置
 * 2. 选择第二小的值，放在第二位，和当前第二位交换位置
 * 3. 重复1，2 执行n-1次
 */

/**
 * 时间复杂度为O(n^2)
 * 性能比较差, 一般实际情况下不会用到, 只有面试的时候会问
 */

const selectionSort = (arr) => {
  for (i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (j = i; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
};

let arr = [6, 9, 3, 0, 9, 4, 1, 7, 0, 3, 2, 9, 8, 0, 9];
selectionSort(arr);
console.log(arr);
