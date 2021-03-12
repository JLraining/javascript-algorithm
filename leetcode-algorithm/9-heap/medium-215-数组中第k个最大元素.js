/**
 * 题目描述:
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 示例 1:
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出: 5
 */

/**
 * 解题思路:
 *   1. 第k个最大元素, 遇到这种描述, 毫不犹豫使用堆
 *   2. 构造size为k最小堆, 先入堆再出堆
 *   3. 取堆顶元素, 即为第k个最大的元素
 */

/**
 * 时间复杂度：nlogn
 */

var findKthLargest = function (nums, k) {
  class MiniHeap {
    constructor() {
      this.heap = [];
    }
    getParentIndex = (index) => {
      return (index - 1) >> 1;
    };
    getLeftIndex = (index) => {
      return index * 2 + 1;
    };
    getRightIndex = (index) => {
      return index * 2 + 2;
    };
    swap = (n1, n2) => {
      const temp = this.heap[n1];
      this.heap[n1] = this.heap[n2];
      this.heap[n2] = temp;
    };
    shiftUp = (index) => {
      if (index <= 0) return;
      const parentIndex = this.getParentIndex(index);
      if (this.heap[index] < this.heap[parentIndex]) {
        this.swap(index, parentIndex);
        this.shiftUp(parentIndex);
      }
    };
    shiftDown = (index) => {
      const leftIndex = this.getLeftIndex(index);
      const rightIndex = this.getRightIndex(index);

      if (
        leftIndex < this.heap.length &&
        this.heap[index] > this.heap[leftIndex]
      ) {
        this.swap(index, leftIndex);
        this.shiftDown(leftIndex);
      }
      if (
        rightIndex < this.heap.length &&
        this.heap[index] > this.heap[rightIndex]
      ) {
        this.swap(index, rightIndex);
        this.shiftDown(rightIndex);
      }
    };
    pop = () => {
      this.heap[0] = this.heap.pop();
      this.shiftDown(0);
    };
    insert(n) {
      this.heap.push(n);
      this.shiftUp(this.heap.length - 1);
    }
  }

  const miniHeap = new MiniHeap();
  for (let i = 0; i < nums.length; i++) {
    miniHeap.insert(nums[i]);
    if (miniHeap.heap.length > k) {
      miniHeap.pop();
    }
  }

  return miniHeap.heap[0];
};
