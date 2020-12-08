const { swap } = require("./sort")
const arr = [8, 5, 2, 9, 5, 6, 3]

const sort = (arr) => {
  quickSort(arr, 0, arr.length - 1)
  return arr
}

const quickSort = (arr, i, j) => {
  if (j - i <= 0) {
    return
  }
  let pivot = i
  let left = i + 1
  let right = j
  while (left <= right) {
    console.log(i, j)
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
  quickSort(arr, i, right)
  quickSort(arr, left, j)
  return
}

console.log(sort(arr))