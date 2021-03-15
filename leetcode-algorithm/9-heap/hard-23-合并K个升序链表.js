/**
 * 题目描述:
 * 给你一个链表数组，每个链表都已经按升序排列。
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 * 示例 1：
 * 输入：lists = [[1,4,5],[1,3,4],[2,6]]
 * 输出：[1,1,2,3,4,4,5,6]
 * 解释：链表数组如下：
 * [
 *   1->4->5,
 *   1->3->4,
 *   2->6
 * ]
 * 将它们合并到一个有序链表中得到。
 * 1->1->2->3->4->4->5->6
 * 示例 2：
 * 输入：lists = []
 * 输出：[]
 */

/**
 * 解题思路:
 * 用最小堆实现, 链表头入堆, 不断入堆出堆
 * 注意链表指针的操作
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists || !(lists && lists.length)) {
    return null;
  }
  let res = new ListNode(0);
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
      if (this.heap[index].val < this.heap[parentIndex].val) {
        this.swap(index, parentIndex);
        this.shiftUp(parentIndex);
      }
    };
    shiftDown = (index) => {
      const leftIndex = this.getLeftIndex(index);
      const rightIndex = this.getRightIndex(index);
      if (
        this.heap[leftIndex] &&
        this.heap[index].val > this.heap[leftIndex].val
      ) {
        this.swap(leftIndex, index);
        this.shiftDown(leftIndex);
      }
      if (
        this.heap[rightIndex] &&
        this.heap[index].val > this.heap[rightIndex].val
      ) {
        this.swap(rightIndex, index);
        this.shiftDown(rightIndex);
      }
    };
    insert = (node) => {
      if (!node) return;
      this.heap.push(node);
      this.shiftUp(this.heap.length - 1);
    };
    pop = () => {
      if (!this.heap) return;
      if (this.heap.length === 1) return this.heap.pop();
      const node = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.shiftDown(0);
      return node;
    };
  }

  let h = new MiniHeap();
  lists.forEach((list) => {
    h.insert(list);
  });

  let p = res;
  while (h.heap.length) {
    const n = h.pop();
    p.next = n;
    p = p.next;
    if (n.next) {
      h.insert(n.next);
    }
  }

  return res.next;
};
