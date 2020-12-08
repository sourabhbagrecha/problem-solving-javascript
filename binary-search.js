const arr = [0, 1, 21, 33, 45, 61, 71, 73]

const binarySearch = (arr, target) => {
  let left = 0
  let right = arr.length-1
  while(left<=right){
    const mid = Math.floor((left+right)/2)
    console.log(left, right, mid)
    if(arr[mid] === target){
      return true
    }
    if(target<mid[arr]){
      left = mid+1
    } else {
      right = mid-1
    }
  }

  return false
}

console.log(binarySearch(arr, 0))