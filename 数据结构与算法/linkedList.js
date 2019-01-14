class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor(props) {
    this.head = new Node('Head')
  }
  find(element) {
    let currentNode = this.head
    while(currentNode.element !== element){
      currentNode = currentNode.next
    }
    return currentNode
  }
  findPrev(element) {
    let currentNode = this.head
    while(currentNode.next && currentNode.next.element !== element) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  display() {
    let currentNode = this.head
    while(currentNode.next !== null) {
      console.log(currentNode.next.element)
      currentNode = currentNode.next
    }
  }
  insert(element, target) {
    const node = new Node(element)
    const current = this.find(target)
    node.next = current.next
    current.next = nodex
  }
  remove(target) {
    const current = this.findPrev(target)
    if (current.next) {
      current.next = current.next.next
    }
  }
}

// let linkedList = new LinkedList()
// linkedList.insert('qingchong', 'Head')
// linkedList.display()
// console.log('*-* '.repeat(6))
// linkedList.insert('sanshao', 'qingchong')
// linkedList.insert('jiehou', 'sanshao')
// linkedList.insert('dajiang', 'jiehou')
// linkedList.display()
// console.log('*-* '.repeat(6))
// linkedList.remove('jiehou')
// linkedList.display()


class TwoWayNode {
  constructor(element) {
    this.element = element
    this.prev = null
    this.next = null
  }
}

class TwoWayLinkList {
  constructor() {
    this.head = new TwoWayNode('Head')
  }
  find(element) {
    let currentNode = this.head
    while(currentNode.element !== element){
      currentNode = currentNode.next
    }
    return currentNode
  }
  display() {
    let currentNode = this.head
    while(currentNode.next !== null) {
      console.log(currentNode.next.element)
      currentNode = currentNode.next
    }
  }
  insert(element, target) {
    const node = new Node(element)
    const current = this.find(target)
    node.next = current.next
    node.prev = current
    current.next = node
  }
  remove(target) {
    const current = this.find(target)
    if (current) {
      current.next.prev = current.prev
      current.prev.next = current.next
      // 重置被删除元素的前后指针
      current.next = current.prev = null
    }
  }
  findLast() {
    let current = this.head
    while(current.next) {
      current = current.next
    }
    return current
  }
  displayReverse() {
    let current = this.findLast()
    while(current.prev) {
      console.log(current.element)
      current = current.prev
    }
  }
}

let twoWayLinkList = new TwoWayLinkList()
twoWayLinkList.insert('qingchong', 'Head')
twoWayLinkList.insert('dajiang', 'qingchong')
twoWayLinkList.insert('linghu', 'dajiang')
twoWayLinkList.insert('luobo', 'linghu')
twoWayLinkList.display()
console.log('*-* '.repeat(6))
twoWayLinkList.remove('linghu')
twoWayLinkList.display()
console.log('*-* '.repeat(6))
twoWayLinkList.displayReverse()



class Loop {
  constructor(props) {
    this.head = new Node('Head')
    this.head.next = this.head
  }
  find(element) {
    let currentNode = this.head
    while(currentNode.element !== element){
      currentNode = currentNode.next
    }
    return currentNode
  }
  findPrev(element) {
    let currentNode = this.head
    while(currentNode.next && currentNode.next.element !== element) {
      currentNode = currentNode.next
    }
    return currentNode
  }
  display() {
    let currentNode = this.head
    while(currentNode.next !== null && currentNode.next.element !== 'Head') {
      console.log(currentNode.next.element)
      currentNode = currentNode.next
    }
  }
  insert(element, target) {
    const node = new Node(element)
    const current = this.find(target)
    node.next = current.next
    current.next = node
  }
  remove(target) {
    const current = this.findPrev(target)
    if (current.next) {
      current.next = current.next.next
    }
  }
}
