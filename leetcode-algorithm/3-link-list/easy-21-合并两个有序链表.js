/**
 * 题目描述:
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 示例 1：
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 */

/**
 * 解题思路: 
 * 和归并排序，最后的两个有序合并的思路是一样
 * 这里换成链表
 */

var mergeTwoLists = function(l1, l2) {
    let res = new ListNode(0);
    let p = res;
    while(l1 && l2) {
        if(l1.val < l2.val) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;
    }
    if(l1) { p.next = l1 }
    if(l2) { p.next = l2 }
    return res.next
};