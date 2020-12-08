const arr1 = [1, 4, 7, 8, 10]
const arr2 = [2, 3, 9]

const mergeSortedArraysInConstantSpace = (arr1, arr2) => {
  let gap = Math.ceil((arr1.length + arr2.length) / 2)
  while (gap >= 1) {
    let i = 0
    let j = i + gap
    while (j < (arr1.length + arr2.length)) {
      let behind = i < arr1.length ? arr1 : arr2
      let ahead = j < arr1.length ? arr1 : arr2
      let offsetI = i < arr1.length ? 0 : -arr1.length
      let offsetJ = j < arr1.length ? 0 : -arr1.length
      if(behind[i+offsetI] > ahead[j+offsetJ]){
        let temp = behind[i+offsetI]
        behind[i+offsetI] = ahead[j+offsetJ]
        ahead[j+offsetJ] = temp
      }
      i++
      j++
    }
    if(gap===1){
      break
    }
    gap = Math.ceil(gap/2)
  }
  return [arr1, arr2]
}

console.log(mergeSortedArraysInConstantSpace(arr1, arr2))