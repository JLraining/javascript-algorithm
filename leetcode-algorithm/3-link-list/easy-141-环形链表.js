/**
 * 题目描述:
 * 给定一个链表，判断链表中是否有环。
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
 * 如果链表中存在环，则返回 true 。 否则，返回 false 。
 * 进阶：
 * 你能用 O(1)（即，常量）内存解决此问题吗？
 * 示例 1：
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 */

/**
 * 解题思路:
 * 1. 哈希表 时间复杂度：O(N) 空间复杂度：O(N)
 * 2. 快慢指针 一个指针走一步 另一个指针走两步 如果相遇 说明有环 时间复杂度：O(N) 空间复杂度：O(1)
 */

var hasCycle = function(head) {
    let set = new Set();
    while(head) {
        if(set.has(head)) {
            return true;
        }
        set.add(head);
        head = head.next
    }
    return false;
};

// 【优化】
var hasCycle2 = function(head) {
    let p1 = head;
    let p2 = head && head.next;

    while(p1 && p2 && p2.next) {
        if(p1 === p2) {
            return true;
        }
        p1 = p1.next;
        p2 = p2.next.next;
    }
    return false;
};