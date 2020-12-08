const isOutOfOrder = (i, num, array) => {
  if(i===0) return num > arr[i+1]
  if(i===arr.length-1) return num < arr[i-1]
  return num > arr[i+1] || num < arr[i-1]
}

const subarraySort = (arr) => {
  let maxOutOfOrder = -Infinity
  let minOutOfOrder = Infinity
  for(let i=0; i<arr.length; i++){
    let num = arr[i]
    if(isOutOfOrder(i, num, arr)){
      maxOutOfOrder = Math.max(maxOutOfOrder, num)
      minOutOfOrder = Math.min(minOutOfOrder, num)
    }
  }
  if(maxOutOfOrder === Infinity){
    return [-1,-1]
  }
  let left=0;
  while(minOutOfOrder >= arr[left]){
    left++
  }
  let right=arr.length-1;
  while(maxOutOfOrder <= arr[right]){
    right--
  }
  return [left, right]
}

const arr = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]

console.log(subarraySort(arr))


/*
  Not so great solution:
  const subarraySort = (arr) => {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
      if(arr[left] >= arr[right]){
        break
      }
      let newLeft = left
      let newRight = right
      if (arr[left] < arr[left + 1]) {
        newLeft = left + 1
      }
      if (arr[right] > arr[right - 1]) {
        newRight = right - 1
      }
      if(newLeft===left && newRight===right){
        break
      } else {
        left = newLeft
        right = newRight
      }
    }
    console.log(left, right)
    return [left, right]
  }
*/