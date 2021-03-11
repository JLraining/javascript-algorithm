/**
 * 数组转换成二叉树
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
        insertNode(root, node)
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