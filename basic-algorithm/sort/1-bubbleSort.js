/**
 * 冒泡排序
 * 从小到大排列
 * 1.比较相邻两个元素, 如果前面比后面大, 则交换顺序
 * 2.一轮结束, 最大的数字放在队尾
 * 3.重复1，2遍历n-1轮
 */

 /**
  * 时间复杂度为O(n^2)
  * 性能比较差, 一般实际情况下不会用到, 只有面试的时候会问
  */

const bubbleSort = (arr) => {
  for (i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};


let arr = [6,9,3,0,9,4,1,7,0,3,2,9,8,0,9];
bubbleSort(arr)
console.log(arr)