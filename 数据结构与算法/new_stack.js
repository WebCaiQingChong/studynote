class Stack {
  constructor() {
    // 存放数据的地方
    this.dataStore = []
    this.top = 0
  }
  // 入栈
  push(element) {
    this.dataStore[this.top++] = element
  }

  pop() {
    return this.dataStore[--this.top]
  }
  peek() {
    return this.dataStore[this.top - 1]
  }
  toString() {
    this.dataStore.forEach(item => {
      console.log(item)
    })
  }
}

var stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack)
console.log(stack.peek())

