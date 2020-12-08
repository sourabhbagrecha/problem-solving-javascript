const str = "noonabbad"

// O(n^2) | O(n^2)
const palindromePartitioningMinCuts = (str) => {
  const cuts = Array(str.length).fill(Infinity)
  const palindromes = []
  for (let i = 0; i < str.length; i++) {
    palindromes.push(Array(str.length).fill(false))
  }

  // Setting diagonal to be true
  for(let i=0; i<str.length; i++){
    palindromes[i][i] = true
  }

  // Finding other palindromes
  for(let length=2; length<str.length+1; length++){
    for(let i=0; i<str.length-length+1; i++){
      const j = length + i - 1
      if(length === 2){
        palindromes[i][j] = str[i] === str[j]
      } else {
        palindromes[i][j] = str[i] === str[j] && palindromes[i+1][j-1]
      }
    }
  }
  
  console.log(palindromes)
  for (let i = 0; i < cuts.length; i++) {
    if (!palindromes[0][i] && i > 0) {
      let min = cuts[i - 1] + 1
      for (let j = 1; j < i; j++) {
        if (palindromes[j][i]) {
          min = Math.min(cuts[j - 1] + 1, min)
        }
      }
      cuts[i] = min
    } else {
      cuts[i] = 0
    }
  }
  return cuts[cuts.length-1]
}

// O(n^3) because checking a palindrome is O(n) and causing duplicate computation | O(n^2)
// const isPalindrome = (str) => {
//   return str.split("").reverse().join("") === str
// }

// const palindromePartitioningMinCuts = (str) => {
//   const cuts = Array(str.length).fill(Infinity)
//   const palindromes = []
//   for (let i = 0; i < str.length; i++) {
//     const newArr = []
//     for (let j = 0; j < str.length; j++) {
//       if (j < i) {
//         newArr.push(false)
//       } else {
//         newArr.push(isPalindrome(str.slice(i, j + 1)))
//       }
//     }
//     palindromes.push(newArr)
//   }
//   for (let i = 0; i < cuts.length; i++) {
//     if (!palindromes[0][i] && i > 0) {
//       let min = cuts[i - 1] + 1
//       for (let j = 1; j < i; j++) {
//         if (palindromes[j][i]) {
//           min = Math.min(cuts[j - 1] + 1, min)
//         }
//       }
//       cuts[i] = min
//     } else {
//       cuts[i] = 0
//     }
//   }
//   return cuts
// }

console.log(palindromePartitioningMinCuts(str))