const str1 = "aaa"
const str2 = "aaaf"

// O(2^(n + m)) | O(n + m)
// const interweavingStrings = (str1, str2, final) => {
//   if (str1.length + str2.length !== final.length) return false
//   return areInterwoven(str1, str2, final, 0, 0)
// }

// const areInterwoven = (str1, str2, final, i = 0, j = 0) => {
//   let k = i + j
//   if (k === final.length) return true

//   if (i < str1.length && str1[i] === final[k]) {
//     if (areInterwoven(str1, str2, final, i + 1, j)) {
//       return true
//     }
//   }

//   if (j < str2.length && str2[j] === final[k]) {
//     return areInterwoven(str1, str2, final, i, j + 1)
//   }

//   return false
// }

// O(nm) | O(nm)
const interweavingStrings = (str1, str2, final) => {
  if (str1.length + str2.length !== final.length) return false
  let cache = []
  for(let x=0; x<str1.length+1; x++){
    let arr = Array(str2.length+1).fill(false)
    cache.push(arr)
  }
  return areInterwoven(str1, str2, final, 0, 0, cache)
}

const areInterwoven = (str1, str2, final, i = 0, j = 0, cache) => {
  if(cache[i][j]) return cache[i][j]

  let k = i + j
  if (k === final.length) return true

  if (i < str1.length && str1[i] === final[k]) {
    cache[i][j] = areInterwoven(str1, str2, final, i + 1, j, cache)
    if (cache[i][j]) return true
  }

  if (j < str2.length && str2[j] === final[k]) {
    cache[i][j] = areInterwoven(str1, str2, final, i, j + 1, cache)
    return cache[i][j]
  }
  return false
}


console.log(interweavingStrings("aaa", "aaaf", "aaafaaa"))