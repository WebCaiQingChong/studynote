class Node {
  constructor(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
  }
  show() {
    return this.data
  }
}

class BST {
  constructor() {
    this.root = null
  }
  insert(data) {
    const node = new Node(data, null, null)
    // 根节点判断
    if (this.root === null) {
      this.root = node
    } else {
      let current = this.root
      let parent
      while (true) {
        parent = current
        if (data < current.data) {
          current = current.left
          if (current === null) {
            parent.left = node
            break
          }
        } else {
          current = current.right
          if (current === null) {
            parent.right = node
            break
          }
        }
      }
    }
  }
  midOrder(node) {
    if (node) {
      this.midOrder(node.left)
      console.log(node.show() + '\n')
      this.midOrder(node.right)
    }
  }
  preOrder(node) {
    if (node) {
      console.log(node.show() + '\n')
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }
  postOrder(node) {
    if (node) {
      this.postOrder(node.left)
      this.postOrder(node.right)
      console.log(node.show() + '\n')
    }
  }
}

let bst = new BST()
bst.insert(23)
bst.insert(16)
bst.insert(3)
bst.insert(22)
bst.insert(45)
bst.insert(37)
bst.insert(99)
bst.insert(1)
bst.insert(2)
bst.postOrder(bst.root)