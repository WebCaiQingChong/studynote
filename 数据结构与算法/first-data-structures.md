### 栈
##### 操作
   * 入栈
   * 出栈
   * 返回栈顶元素
   * 返回栈长度
   * 清空栈
   * 是否空栈

##### js实现

```js
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
}
```

##### 应用场景
* 生活场景: 张亮麻辣烫的选餐盆，只能从顶部拿或者顶部放入

* 技术场景：

```js
// Given a string containing just the characters
//  '(', ')', '{', '}', '[' and ']', 
//  determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

var isValid = function (s) {
  const map = {
    '(': 1,
    ')': -1,
    '{': 2,
    '}': -2,
    '[': 3,
    ']': -3
  }
  if (s.length % 2 === 1) {
    return false
  }
  if (map[s[0]] < 0) {
    return false
  }
  let arr = []
  for (let i = 0, len = s.length; i < len; i++) {
    if (map[s[i]] > 0) {
      arr.push(map[s[i]])
    } else {
      if (arr[arr.length - 1] + map[s[i]] === 0) {
        arr.pop()
      } else {
        return false
      }
    }
  }
  return arr.length === 0
}
console.log(isValid('{[]}'))
```

### 队列

##### 操作

* 入队
* 出队
* 返回队首
* 返回队列长度
* 清空队列

##### js实现
```js
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
```

##### 应用场景
* 生活场景: 吃饭排队
* 技术场景: 请求队列

```js
let requestQueue = new Queue()
// 伪代码
requestQueue.enqueue(fn)
requestQueue.enqueue(fn)
requestQueue.enqueue(fn)

for(let i = 0; i < 3; i++) {
  requestQueue.dequeue()
}
```

### 链表

#### 出现原因

在很多变成语言中，数组的长度是固定的，当数组被数据填满时，再加入其他数据就会非常困难。同时数组中，
添加删除元素也比较麻烦。虽然js不存在上述问题，但是js的数组效率与其他语言对比(C++, Java)相对较低
##### 操作

* 插入
* 寻找
* 遍历
* 删除


### 二叉树

##### 概念

* 根节点    树最上面的节点
* 父节点    节点下面连接了多个节点，它为父节点
* 子节点    节点下面连接了多个节点，多个节点为子节点
* 叶子节点  没有子节点的节点，为叶子节点
* 路径      从一个节点到另外一个节点的这一组边成为路径
* 遍历      以某种特定的顺序访问树中的所有节点成为树的遍历
* 深度      树的层级，即为树的深度


##### 操作

* 插入
* 遍历
* 删除
* 排序

#### 二叉查找树

* 中序遍历    按照节点上的键值，以升序访问BST上的所有节点
* 先序遍历    先序遍历先访问根节点，然后以同样的方式访问左子树和右子树
* 后续遍历    后续遍历先访问叶子节点，从左子树到右子树，再到根节点