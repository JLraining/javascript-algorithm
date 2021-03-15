/**
 * 树的子节点只有左节点和右节点
 */
 const binaryTree1 = {
   val: 1,
   left: {
     val: 2
   },
   right: {
     val: 3
   }
 }

/**
 * 数组转换成排序二叉树 左节点最小 右节点最大
 * 排序二叉树被广泛的应用在搜索引擎
 */
class BinaryTree {
    constructor(array){
      this.root = null;
      array.forEach(i => insert(i))
    }
    
    insert = (key) => {
      const node = {key};
      if(this.root === null) {
        this.root = node;
      } else {
        insertNode(this.root, node)
      }
    }
    
    insertNode = (node, newNode) => {
      if(newNode.key < node.key) {
        if(node.left === null) {
          node.left = newNode;
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if(node.right === null) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode)
        }
      }
    }
}