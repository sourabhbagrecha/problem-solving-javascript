const { swap } = require("./sort")

const arr = [9, 8, 2, 9, 8, 7, 2, 0, 8, 5, 7]

const heapSort = (arr) => {
  buildMaxHeap(arr)
  for (let endIdx = arr.length-1; endIdx > 0; endIdx--) {
    swap(arr, 0, endIdx)
    siftDown(arr, 0, endIdx - 1)
  }
  return arr
}

const buildMaxHeap = (arr) => {
  let firstParentIdx = ~~((arr.length - 1) / 2)
  for (let i = firstParentIdx + 1; i >= 0; i--) {
    console.log(i)
    siftDown(arr, i, arr.length - 1)
  }
  return arr
}

const siftDown = (arr, startIdx, endIdx) => {
  let parentIdx = startIdx
  while (parentIdx <= endIdx) {
    console.log(parentIdx, endIdx)
    let leftChildIdx = (parentIdx * 2) + 1
    let rightChildIdx = (parentIdx * 2) + 2
    let maxIdx = parentIdx
    if (leftChildIdx <= endIdx) {
      if (arr[leftChildIdx] > arr[maxIdx]) {
        maxIdx = leftChildIdx
      }
    }
    if (rightChildIdx <= endIdx) {
      if (arr[rightChildIdx] > arr[maxIdx]) {
        maxIdx = rightChildIdx
      }
    }
    if (parentIdx === maxIdx) {
      break
    } else {
      swap(arr, parentIdx, maxIdx)
      parentIdx = maxIdx
    }
  }
}

console.log(heapSort(arr))