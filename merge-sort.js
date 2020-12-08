const mergeSort = (arr) => {
  if(arr.length <=1){
    return arr
  }
  const auxiliaryArray = Array.from(arr)
  mergeSortHelper(arr, 0, arr.length-1, auxiliaryArray)
  return arr
}

const mergeSortHelper = (mainArray, startIdx, endIdx, auxiliaryArray) => {
  if(startIdx === endIdx) return
  
  const middleIdx = ~~((startIdx+endIdx)/2)
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray)
  mergeSortHelper(auxiliaryArray, middleIdx+1, endIdx, mainArray)
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray)
  return
}

const doMerge = (mainArray, startIdx, middleIdx, endIdx, auxiliaryArray) => {
  let k = startIdx
  let i=startIdx
  let j = middleIdx+1
  while(i<=middleIdx && j<=endIdx){
    if(auxiliaryArray[i]<auxiliaryArray[j]){
      mainArray[k] = auxiliaryArray[i]
      i++
    } else {
      mainArray[k] = auxiliaryArray[j]
      j++
    }
    k++
  }
  while(i<=middleIdx){
    mainArray[k] = auxiliaryArray[i]
    i++
    k++
  }
  while(j<=endIdx){
    mainArray[k] = auxiliaryArray[j]
    j++
    k++
  }
  return
}

// Typical: O(n*log(n)) | O(n*log(n))
// const mergeSort = (arr) => {
//   if (arr.length <= 1) {
//     return [arr]
//   }
//   const mid = ~~((arr.length) / 2)
//   const leftHalf = mergeSort(arr.slice(0, mid))
//   const rightHalf = mergeSort(arr.slice(mid, arr.length))
//   return mergeHelper(leftHalf, rightHalf)
// }

// const mergeHelper = (leftHalf, rightHalf) => {
//   let i = 0, j = 0, k=0

//   const mergedArr = Array(leftHalf.length+rightHalf.length)
//   while (i < leftHalf.length && j < rightHalf.length) {
//     if (leftHalf[i] < rightHalf[j]) {
//       mergedArr[k] = (leftHalf[i])
//       i++
//     } else {
//       mergedArr[k] = (rightHalf[j])
//       j++
//     }
//     k++
//   }
//   while(i < leftHalf.length){
//     mergedArr[k] = leftHalf[i]
//     i++
//     k++
//   }
//   while(j<rightHalf.length){
//     mergedArr[k] = rightHalf[j]
//     j++
//     k++
//   }
//   return mergedArr
// }

console.log(JSON.stringify(mergeSort([8, 5, 2, 9, 5, 6, 3])))
