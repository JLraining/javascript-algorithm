/**
 * 归并排序
 * 分：把数组分成两半，再两半，直到分成只有一个数的数组
 * 合：把两个数合并成两个有序数组，再合并两个有序数组，直到全部数组合并到一起
 * 从小到大排列
 * 1. 把数分成两半
 * 2. 把左数进行归并排序 右数进行归并排序（递归）
 * 3. 左树和右树合并
 */

/**
 * 分的时间复杂度为O(logn)
 * 和的时间复杂度为O(n)
 * 整体的时间复杂度为O(nlogn)
 */

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid, arr.length);
  let leftOrderArr = mergeSort(leftArr);
  let rightOrderArr = mergeSort(rightArr);
  let res = [];
  while (leftOrderArr.length && rightOrderArr.length) {
    res.push(
      leftOrderArr[0] < rightOrderArr[0]
        ? leftOrderArr.shift()
        : rightOrderArr.shift()
    );
  }
  res = leftOrderArr.length
    ? [...res, ...leftOrderArr]
    : [...res, ...rightOrderArr];
  return res;
};

let arr = [6, 9, 3, 0, 9, 4, 1, 7, 0, 3, 2, 9, 8, 0, 9];
arr = mergeSort(arr);
console.log(arr);
