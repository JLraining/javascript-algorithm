// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
// Example 1:
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:
// Input: head = []
// Output: []
// Example 3:
// Input: head = [1]
// Output: [1]


/**
 * Definition for singly-linked list.
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head) {
        return null
    }
    let p1: ListNode | null = head;
    let res = p1.next ? p1.next : p1;
    let temp: ListNode | null = null;
    while (p1 && p1.next) {
        // adjacent last exchange group
        if (temp) {
            temp.next = p1.next
        }
        // use temp to cache current first node
        temp = p1;
        // exchange currently adjacent nodes
        let p2: ListNode | null = p1.next;
        temp.next = p2.next;
        p2.next = temp;
        p1 = temp.next
    }
    return res
};

