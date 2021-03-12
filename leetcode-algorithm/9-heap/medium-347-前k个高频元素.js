/**
 * 题目描述
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 * 示例 1:
 * 输入: nums = [1,1,1,2,2,3], k = 2
 * 输出: [1,2]
 */

/**
 * 解题思路:
 *   1. 第k个最大元素, 遇到这种描述, 毫不犹豫使用堆
 *   2. 遍历数组, 构造前k高元素的map
 *   2. 构造size为k最小堆, 先入堆再出堆
 *   3. 取堆顶元素, 即为第k个最大的元素
 */

var topKFrequent = function (nums, k) {
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
      if (this.heap[index][0] < this.heap[parentIndex][0]) {
        this.swap(index, parentIndex);
        this.shiftUp(parentIndex);
      }
    };
    shiftDown = (index) => {
      const leftIndex = this.getLeftIndex(index);
      const rightIndex = this.getRightIndex(index);

      if (
        leftIndex < this.heap.length &&
        this.heap[index][0] > this.heap[leftIndex][0]
      ) {
        this.swap(index, leftIndex);
        this.shiftDown(leftIndex);
      }
      if (
        rightIndex < this.heap.length &&
        this.heap[index][0] > this.heap[rightIndex][0]
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
  const map = new Map();

  nums.forEach((i) => {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  });

  map.forEach((val, key) => {
    miniHeap.insert([val, key]);
    if (miniHeap.heap.length > k) {
      miniHeap.pop();
    }
  });

  return miniHeap.heap.map((i) => i[1]);
};
