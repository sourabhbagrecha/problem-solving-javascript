// O(n^3+m) | O(n+m)
const numbersInPi = (pi, numbers) => {
  const numbersTable = {}
  for(let num of numbers) numbersTable[num] = true
  const cache = {}
  for(let i in pi){
    getMinSpaces(pi, numbersTable, cache, pi.length-1-i)
  }
  if (cache[0] === Infinity) return -1
  return cache[0]
}

const getMinSpaces = (pi, numbersTable, cache, idx) => {
  if(idx === pi.length) return -1
  
  if(cache[idx]) return cache[idx]

  let minSpaces = Infinity
  for(let i=idx; i<pi.length; i++){
    const prefix = pi.slice(idx, i+1)
    if(numbersTable[prefix]){
      let minSpacesInSuffix = getMinSpaces(pi, numbersTable, cache, i+1)
      minSpaces = Math.min(minSpaces, minSpacesInSuffix+1)
    }
  }
  cache[idx] = minSpaces
  return minSpaces
}

// O(n^3+m) | O(n+m)
// const numbersInPi = (pi, numbers) => {
//   const numbersTable = {}
//   for(let num of numbers) numbersTable[num] = true
//   const cache = {}
//   const minSpaces = getMinSpaces(pi, numbersTable, cache, 0)
//   if(minSpaces===Infinity) return -1
//   return minSpaces
// }

// const getMinSpaces = (pi, numbersTable, cache, idx) => {
//   if(idx === pi.length) return -1
  
//   if(cache[idx]) return cache[idx]

//   let minSpaces = Infinity
//   for(let i=idx; i<pi.length; i++){
//     const prefix = pi.slice(idx, i+1)
//     if(numbersTable[prefix]){
//       let minSpacesInSuffix = getMinSpaces(pi, numbersTable, cache, i+1)
//       minSpaces = Math.min(minSpaces, minSpacesInSuffix+1)
//     }
//   }
//   cache[idx] = minSpaces
//   return minSpaces
// }

const pi = "3141592"
const numbers = ["3141", "5", "31", "2", "4159", "9", "42"]

console.log(numbersInPi(pi, numbers))