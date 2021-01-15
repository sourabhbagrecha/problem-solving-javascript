const arr = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
// const arr = [3, 5, -9, 1, 3]

const findSubsetWithMaxSum = (arr) => {
  let maxSum = 0
  let runningSum = 0
  for (let i = 0; i < arr.length; i++) {
    runningSum += arr[i]
    if (runningSum<0) runningSum = 0
    maxSum = Math.max(runningSum, maxSum)
  }
  return maxSum
}

console.log(findSubsetWithMaxSum(arr))
