const { swap } = require("./sort")

// O(n) | O(1)
const quickSelect = (arr, k) => {
  const pos = k - 1
  return quickSelectHelper(arr, 0, arr.length - 1, pos)
}

const quickSelectHelper = (arr, start, end, pos) => {
  while (true) {
    let pivot = start
    let left = start + 1
    let right = end
    while (left <= right) {
      console.log(left, right)
      if (arr[left] > arr[pivot] && arr[right] < arr[pivot]) {
        swap(arr, left, right)
      }
      if (arr[left] <= arr[pivot]) {
        left++
      }
      if (arr[right] >= arr[pivot]) {
        right--
      }
    }
    swap(arr, right, pivot)
    if (pos === right) {
      return arr[pos]
    } else if (right < pos) {
      start = right + 1
    } else {
      end = right - 1
    }
  }
}

const arr = [8, 5, 2, 9, 7, 6, 3, 1, 0]
const k = 4

console.log(quickSelect(arr, k))