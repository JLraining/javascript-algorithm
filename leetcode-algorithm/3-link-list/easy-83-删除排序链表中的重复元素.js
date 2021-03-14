/**
 * 题目描述:
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * 示例 1:
 * 输入: 1->1->2
 * 输出: 1->2
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var deleteDuplicates = function (head) {
  var set = new Set();
  var l3 = new ListNode(0);
  var p = l3;

  while (head) {
    if (!set.has(head.val)) {
      set.add(head.val);
      p.next = new ListNode(head.val);
      p = p.next;
    }
    head = head.next;
  }
  return l3.next;
};

// 【优化】
var deleteDuplicates = function (head) {
  let p = head;
  while (p && p.next) {
    if (p.val === p.next.val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }

  return head;
};
