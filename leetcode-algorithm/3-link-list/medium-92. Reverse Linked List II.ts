// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

//  

// Example 1:


// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if(!head) {
        return null;
    }
  
    let n: number = 0;
    let dummyNode: ListNode = new ListNode(0, head);
    let p1: ListNode | null = dummyNode;
    let p2: ListNode | null = dummyNode;
    let start: ListNode = dummyNode;

    while(n < left) {
        start = p1;
        p1 = p1.next;
        p2 = p2.next;
        n++;
    }
    start.next = null;
    while(n <= right) {
        p2 = p2.next
        n++;
    }
    n = right - left;
    while(n >= 0) {
        let temp: ListNode | null = p1.next;
        p1.next = p2;
        p2 = p1;
        p1 = temp;
        n--;
    }
    start.next = p2;

    return dummyNode.next;
};

// offical solution

// var reverseBetween = function(head, left, right) {
//     // 因为头节点有可能发生变化，使用虚拟头节点可以避免复杂的分类讨论
//     const dummyNode = new ListNode(-1);
//     dummyNode.next = head;

//     let pre = dummyNode;
//     // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
//     // 建议写在 for 循环里，语义清晰
//     for (let i = 0; i < left - 1; i++) {
//         pre = pre.next;
//     }

//     // 第 2 步：从 pre 再走 right - left + 1 步，来到 right 节点
//     let rightNode = pre;
//     for (let i = 0; i < right - left + 1; i++) {
//         rightNode = rightNode.next;
//     }

//     // 第 3 步：切断出一个子链表（截取链表）
//     let leftNode = pre.next;
//     let curr = rightNode.next;

//     // 注意：切断链接
//     pre.next = null;
//     rightNode.next = null;

//     // 第 4 步：同第 206 题，反转链表的子区间
//     reverseLinkedList(leftNode);

//     // 第 5 步：接回到原来的链表中
//     pre.next = rightNode;
//     leftNode.next = curr;
//     return dummyNode.next;
// };

// const reverseLinkedList = (head) => {
//     let pre = null;
//     let cur = head;

//     while (cur) {
//         const next = cur.next;
//         cur.next = pre;
//         pre = cur;
//         cur = next;
//     }
// }
