/**
 * 最小堆的实现
 * 基础功能: 数值插入和删除堆顶
 * 数值插入 insert (时间复杂度 O(logk))
 *  1. 将改值放在堆的末位, 即数组的末位
 *  2. 上移: 不断和它的父节点比较, 如果比父节点小, 则不断交换, 直到父节点小于该值
 * 删除堆顶 pop (时间复杂度 O(logk))
 *  1. 用数组尾部替换堆顶元素(直接删除会破坏堆结构)
 *  2. 下移: 不断和它的左右子节点比较, 如果比子节点大, 则不断交换, 直到子节点大于该值
 * 获取堆顶 peek
 *  1. 返回数组的头部
 * 获取堆的大小 size
 *  2. 返回数组的长度
 */
class MiniHeap {
  constructor() {
    this.heap = [];
  }

  swap = (n1, n2) => {
    const temp = this.heap[n1];
    this.heap[n1] = this.heap[n2];
    this.heap[n2] = temp;
  };

  getParentIndex = (index) => {
    return (index - 1) >> 1;
  };

  getLeftChildIndex = (index) => {
    return index * 2 + 1;
  };

  getRightChildIndex = (index) => {
    return index * 2 + 2;
  };

  shiftUp = (index) => {
    //比较当前节点和父节点的大小
    if (index <= 0) {
      return;
    }
    const parentIndex = this.getParentIndex(index);
    if (this.heap[index] < this.heap[parentIndex]) {
      this.swap(index, parentIndex);
      this.shiftUp(parentIndex);
    }
  };

  insert = (value) => {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  };

  shiftDown = (index) => {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);

    if (
      leftChildIndex <= this.heap.length - 1 &&
      this.heap[index] > this.heap[leftChildIndex]
    ) {
      this.swap(index, leftChildIndex);
      this.shiftDown(leftChildIndex);
    }

    if (
      rightChildIndex <= this.heap.length - 1 &&
      this.heap[index] > this.heap[rightChildIndex]
    ) {
      this.swap(index, rightChildIndex);
      this.shiftDown(rightChildIndex);
    }
  };

  pop = () => {
    if (this.heap.length === 0) {
      return;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  };

  peek = () => {
    return this.heap[0];
  };

  size = () => {
    return this.heap.length;
  };
}
