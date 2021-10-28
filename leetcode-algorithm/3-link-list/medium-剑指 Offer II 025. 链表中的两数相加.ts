// 给定两个 非空链表 l1和 l2 来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
// 可以假设除了数字 0 之外，这两个数字都不会以零开头。
// 例1：
// 输入：l1 = [7,2,4,3], l2 = [5,6,4]
// 输出：[7,8,0,7]
// 示例2：
// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[8,0,7]
// 示例3：
// 输入：l1 = [0], l2 = [0]
// 输出：[0]

/**
 * solution:
 * 反转链表 + 两数相加
 */

/**
 * Definition for singly-linked list.
 */

 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

 function addTwoNumbers2(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if(!l1) {
        return l2;
    }
    if(!l2) {
        return l1;
    }

    // 翻转列表
    const reverse = (ll: ListNode): ListNode => {
        let p2: ListNode | null = null;
        while(ll) {
            let p1: ListNode | null = ll.next;
            ll.next = p2;
            p2 = ll;
            ll = p1;
        }
        return p2;
    }

    l1 = reverse(l1);
    l2 = reverse(l2);


    // 两数相加
    let head: ListNode = new ListNode(0);
    let res = head;
    let carry: number = 0;

    while(l1 || l2 || carry) {
        let n: number = carry;
        if(l1) {
            n += l1.val;
        }
        if(l2) {
            n += l2.val;
        }
        res.next = new ListNode(n % 10);
        res = res.next;

        carry = Math.floor(n / 10);

        l1 = l1 && l1.next;
        l2 = l2 && l2.next
    }

    // 翻转相加的结果
    return reverse(head.next)
};