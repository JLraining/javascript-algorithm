/**
 * 题目描述:反转一个单链表。
 * 示例:
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 解题思路:
 * 两个指针 p1从前到后遍历链表 p2存放新链表 其中前一个节点和后一个节点不断交换位置
 */

var reverseList = function (head) {
  let p1 = head;
  let p2 = null;
  while (p1) {
    const temp = p1.next;
    p1.next = p2;
    p2 = p1;
    p1 = temp;
  }
  return p2;
};

// 递归
var reverseList2 = function (head) {
  if (!head || !head.next) {
    return head;
  }
  var newHead = reverseList2(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};
