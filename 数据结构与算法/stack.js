class Stack {
  constructor() {
    this.dataStore = []
    this.top = 0
  }
  
  push (element) {
    this.dataStore[this.top++] = element
  }

  pop () {
    return this.dataStore[--this.top]
  } 
  peek () {
    return this.dataStore[this.top - 1]
  }
  length () {
    return this.top
  }
  clear () {
    this.top = 0
  }
  empty () {
    return this.top === 0
  }
}

let stack = new Stack()
stack.push('1')
stack.push('2')
stack.push('3')
console.log(stack.length())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.empty())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.empty())