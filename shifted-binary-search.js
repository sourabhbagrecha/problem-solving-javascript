const arr = [45, 61, 72, 73, 0, 1, 21, 33, 45]

// O(log(n)) | O(1)
const shiftedBinarySearch = (arr, target) => {
  let left = 0
  let right = arr.length-1
  while(left<=right){
    const leftElement = arr[left]
    const rightElement = arr[right]
    const mid = ~~((left+right)/2)
    const midElement = arr[mid]

    if(midElement === target){
      return mid
    }
    if(leftElement<midElement){ 
      // This means left part is sorted completely
      if(target<midElement && target>= leftElement){
        [left, right] = exploreLeft(left, mid)
      }else {
        [left, right] = exploreRight(right, mid)
      }
    }else {
      // This means right part is sorted completely
      if(target>midElement && target<=rightElement){
        [left, right] = exploreRight(right, mid)
      } else {
        [left, right] = exploreLeft(left, mid)
      }
    }
  }
  return -1
}

const exploreLeft = (left, mid) => [left, mid-1]
const exploreRight = (right, mid) => [mid+1, right]

console.log(shiftedBinarySearch(arr, 45))


// Really Dumb O(n) soln, can be useful when shiftedBy is given to eliminate the below O(n) minIdx searching
// const shiftedBinarySearch = (arr, target, shiftedBy) => {
  // let minIdx = 0 
//   for(let i=1; i<arr.length; i++){
//     if(arr[minIdx]>arr[i] ){
//       minIdx = i
//     }
//   }
  
//   let left = 0
//   let right = arr.length -1

//   while(left<=right){
//     const mid = Math.floor((left+right)/2)
//     const midNow = (mid+minIdx)%arr.length
//     console.log(left, right, mid)
//     if(arr[midNow] === target){
//       return true
//     }
//     if(arr[mid]<target){
//       right = mid-1
//     } else {
//       left = mid+1
//     }
//   }
//   return false
// }
