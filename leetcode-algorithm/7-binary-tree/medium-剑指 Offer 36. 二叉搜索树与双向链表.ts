// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的循环双向链表。要求不能创建任何新的节点，只能调整树中节点指针的指向。

// 我们希望将这个二叉搜索树转化为双向循环链表。链表中的每个节点都有一个前驱和后继指针。对于双向循环链表，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点。

// 下图展示了上面的二叉搜索树转化成的链表。“head” 表示指向链表中有最小元素的节点。



/**
 * solution
 * 利用二叉树的中序遍历
 */
/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
 var treeToDoublyList = function(root) {
    if(!root) {
        return null;
    }
    let head = null;
    let pre = null;
    const dfs = (curNode) => {
        if(curNode.left) {
            dfs(curNode.left);
        }
        if(!head) {
            head = curNode;
        }
        if(pre) {
            pre.right = curNode
            curNode.left =  pre;
        }
        pre = curNode;
        if(curNode.right) {
           dfs(curNode.right);  
        }
    } 

    dfs(root);   
    pre.right = head;
    head.left = pre;
    return head;
};