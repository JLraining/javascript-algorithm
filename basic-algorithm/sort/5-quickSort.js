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

function quickSort(arr, left = 0, right = arr.length - 1) {
  // 基础条件：数组为空或只有一个元素时不需要排序
  if (left >= right) {
    return;
  }

  // 调用 partition 函数将数组分区，并获取基准元素的最终位置
  const pivotIndex = partition(arr, left, right);

  // 对基准元素左边的子数组进行递归排序
  quickSort(arr, left, pivotIndex - 1);

  // 对基准元素右边的子数组进行递归排序
  quickSort(arr, pivotIndex + 1, right);
}

// 分区函数：在数组上进行分区并返回基准元素的最终位置
function partition(arr, left, right) {
  // 选择最右边的元素作为基准元素
  const pivot = arr[right];
  let i = left;

  // 遍历数组，将小于 pivot 的元素放在左边，大于等于 pivot 的元素放在右边
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  // 将 pivot 放到正确的位置
  [arr[i], arr[right]] = [arr[right], arr[i]];

  // 返回基准元素的位置
  return i;
}

// 示例用法：
const array = [3, 6, 8, 10, 1, 2, 1];
quickSort(array);
console.log(array); // 输出：[1, 1, 2, 3, 6, 8, 10]
