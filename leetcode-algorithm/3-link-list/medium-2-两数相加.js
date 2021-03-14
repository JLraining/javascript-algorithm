/**
 * 题目描述:
 *   给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 *   请你将两个数相加，并以相同形式返回一个表示和的链表。
 *   你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *   输入：l1 = [2,4,3], l2 = [5,6,4]
 *   输出：[7,0,8]
 *   解释：342 + 465 = 807.
 */

/**
 * 解题思路:
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var addTwoNumbers = function (l1, l2) {
  let l3 = null;
  let carry = 0;
  let p = null;

  while (l1 || l2 || carry) {
    let nl1 = l1 && l1.val ? l1.val : 0;
    let nl2 = l2 && l2.val ? l2.val : 0;
    let n1 = (nl1 + nl2 + carry) % 10;
    carry = Math.floor((nl1 + nl2 + carry) / 10);
    if (l3 !== null) {
      p.next = new ListNode(n1);
      p = p.next;
    } else {
      l3 = new ListNode(n1);
      p = l3;
    }

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return l3;
};
