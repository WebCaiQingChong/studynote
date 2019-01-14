class Queue {
  constructor() {
    this.dataStore = []
  }
  enqueue(element) {
    this.dataStore.push(element)
  }
  dequeue() {
    return this.dataStore.shift()
  }
  front() {
    return this.dataStore[0]
  }
  back() {
    return this.dataStore[this.dataStore.length - 1]
  }
  toString() {
    return this.dataStore.reduce((prev, current) => `${prev}\n${current}`)
  }
  empty() {
    return this.dataStore.length === 0
  }
}

let queue = new Queue()
queue.enqueue('青虫')
queue.enqueue('三少')
queue.enqueue('令狐')
queue.enqueue('萝卜')
queue.enqueue('大奖')
queue.enqueue('杰猴')
console.log(queue.toString() + '\n ---------------')
console.log(queue.front() + '\n ---------------')
console.log(queue.back() + '\n ---------------')
queue.dequeue()
queue.dequeue()
queue.dequeue()
console.log(queue.toString() + '\n ---------------')
console.log(queue.front() + '\n ---------------')
console.log(queue.back() + '\n ---------------')
console.log(queue.empty() + '\n ---------------')
queue.dequeue()
queue.dequeue()
queue.dequeue()
console.log(queue.empty())