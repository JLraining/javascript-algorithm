/**
 * 快速排序
 * 从小到大排列
 * 0. 如果数组的长度为1，直接返回
 * 1. 找个基准，一般队头，把比基准大的数放在基准后面，把比基准小的数放在基准前面
 * 2. 递归的对分组后的数组快排操作
 */

/**
 * 分的时间复杂度为O(logn)
 * 分区的时间复杂度为O(n)
 * 整体时间复杂度为O(nlogn)
 */

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const flag = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > flag) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return [...quickSort(left), flag, ...quickSort(right)];
};

let arr = [6, 9, 3, 0, 9, 4, 1, 7, 0, 3, 2, 9, 8, 0, 9];
arr = quickSort(arr);
console.log(arr);
