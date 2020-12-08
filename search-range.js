const arr = [0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73]
const target = 45

const searchRange = (arr, target) => {
  let rLeft = -1
  let rRight = -1
  let left = 0
  let right = arr.length-1
  // Finding left Range
  while(left<=right){
    let mid = ~~((left+right)/2)
    if(arr[mid] === target){
      if(mid===0){
        rLeft = mid
        break
      } else if(arr[mid-1]=== target) {
        right = mid-1
        continue
      } else {
        rLeft=mid
        break
      }
    }
    if(arr[mid] > target){
      right = mid-1
    }else {
      left = mid+1
    }
  }

  // Finding right Range
  left = 0
  right = arr.length-1
  while(left<=right){
    let mid = ~~((left+right)/2)
    if(arr[mid] === target){
      if(mid===arr.length-1){
        rRight = mid
        break
      } else if(arr[mid+1]=== target) {
        left = mid+1
        continue
      } else {
        rRight=mid
        break
      }
    }
    if(arr[mid] > target){
      right = mid-1
    }else {
      left = mid+1
    }
  }

  return [rLeft, rRight]
}

console.log(searchRange(arr, target))