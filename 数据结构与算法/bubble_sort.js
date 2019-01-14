function bubble_sort(arr) {
  var index = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      console.count()
      console.log(arr)
      if(arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        // let temp = arr[j]
        // arr[j] = arr[j + 1]
        // arr[j + 1] = temp
      }
    }
  }
  console.log(arr)
}

const a = [2, 5, 9, 33, 87, 99]
const b = a.reverse()
bubble_sort(b)