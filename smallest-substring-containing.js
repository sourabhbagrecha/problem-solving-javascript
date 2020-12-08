// O(b + s) | O(b + s)
const smallestSubstringContaining = (bigString, smallString) => {
  const targetCharCounts = {}
  for(let i=0; i<smallString.length; i++){
    targetCharCounts[smallString[i]] = (targetCharCounts[smallString[i]] || 0) + 1
  }
  const substringBounds = getSubstringBounds(bigString, targetCharCounts)
  return substringBounds[1] === Infinity ? "": str.slice(substringBounds[0], substringBounds[1]+1)
}

const getSubstringBounds = (bigString, targetCharCounts) => {
  let substringBounds = [0, Infinity]
  const substringCharCounts = {}
  const numUniqueChars = Object.keys(targetCharCounts).length
  let numUniqueCharsDone = 0
  let leftIdx = 0
  let rightIdx = 0
  while(rightIdx<bigString.length){
    const rightChar = bigString[rightIdx]
    if(!targetCharCounts[rightChar]){
      rightIdx++
      continue
    } else {
      substringCharCounts[rightChar] = (substringCharCounts[rightChar] || 0) + 1
      if(substringCharCounts[rightChar] === targetCharCounts[rightChar]){
        numUniqueCharsDone++
        while(numUniqueCharsDone === numUniqueChars && leftIdx <= rightIdx){
          substringBounds = getCloserBounds(leftIdx, rightIdx, substringBounds[0], substringBounds[1])
          const leftChar = bigString[leftIdx]
          if(!substringCharCounts[leftChar]){
            leftIdx++
            continue
          }
          if(substringCharCounts[leftChar] === targetCharCounts[leftChar]){
            numUniqueCharsDone--
          }
          if(substringCharCounts[leftChar]){
            substringCharCounts[leftChar]--
          }
          leftIdx++
        }
      }      
    }
    rightIdx++
  }
  return substringBounds
}

const getCloserBounds = (idx1, idx2, idx3, idx4) => {
  return idx2 - idx1 > idx4 - idx3 ? [idx3, idx4] : [idx1, idx2]
}


const str = "abcd$ef$axb$c$"
const substr = "$$abf"

console.log(smallestSubstringContaining(str, substr))

// My method with slight edge case not working: O(b+s) | O(b+s)
// const smallestSubstringContaining = (str, substr) => {
//   const substrState = {}
//   for(let i=0; i<substr.length; i++){
//     substrState[substr[i]] = (substrState[substr[i]] || 0) + 1
//   }
//   let left = 0
//   let right = 0
//   let currentMatched = 0
//   const containState = {}
//   let results = [-1, -1]
//   while(left<str.length){
//     if(!substrState[str[right]]){
//       left++
//       if(right<=left){
//         right++
//       }
//       continue
//     }
//     while(right<str.length){
//       const rightEle = str[right]
//       if(substrState[rightEle]){
//         containState[rightEle] = (containState[rightEle] || 0) + 1
//         if(containState[rightEle] === substrState[rightEle]){
//           currentMatched++
//         }
//         console.log(left, right, containState, currentMatched)
//         if(currentMatched === Object.keys(substrState).length){
//           results = [left, right]
//           break
//         }
//       }
//       right++
//     }
//     const leftEle = str[left]
//     if(containState[leftEle]){
//       containState[leftEle]--
//       if(containState[leftEle] !== substrState[leftEle]){
//         currentMatched--
//       }
//     }
//     left++
//   }
//   return str.slice(results[0], results[1]+1)
// }

// const str = "abcd$ef$axb$c$"
// const substr = "$$abf"

// console.log(smallestSubstringContaining(str, substr))