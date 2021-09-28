// You are given the head of a singly linked-list. The list can be represented as:
// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:
// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.
//  
// Example 1:
// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Example 2:
// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/**
 * my solution
 */
function reorderList(head: ListNode | null): void {
    if (!head) {
        return null;
    }
    let p1: ListNode | null = head;
    while (p1 && p1.next && p1.next.next) {
        let temp: ListNode = p1.next;
        let p2: ListNode = p1;

        while (p2.next.next) {
            p2 = p2.next;
        }
        p1.next = p2.next;
        p1.next.next = temp;
        p2.next = null;
        p1 = temp;
    }
};

/**
 * offical solution
 * 1. find the middle of the link list. use slow && fast pointer.
 * 2. reverse the right half part of the link-list
 * 3. merge the two part.define two pointer called p and q. p.next = q; q.next = p.next change the link-list in turn
 */

 function reorderList2(head: ListNode | null): void {
    let slow = head, quick = head;
    while (quick && quick.next) {
        slow = slow.next;
        quick = quick.next.next;
    }
    let cur = slow, pre = null;
    while (cur) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    let p = head;
    while (pre) {
        const nextOfP = p.next;
        const nextOfPre = pre.next;
        if (p !== nextOfPre) {
            p.next = pre;
        }
        if (pre !== nextOfP) {
            pre.next = nextOfP;
        }
        p = nextOfP;
        pre = nextOfPre;
    }
};