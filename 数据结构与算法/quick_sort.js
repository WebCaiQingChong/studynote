function quick_sort(arr) {
  const front = arr.shift()
  if(arr.length <= 1) {
    return front
  }
  let left = []
  let right = []
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] < front) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quick_sort()[left].concat([front], quick_sort(right))
}

const a = [2, 9, 5, 33, 99, 87]
// const a = [2, 5, 9, 33, 87, 99]
console.log(quick_sort(a))