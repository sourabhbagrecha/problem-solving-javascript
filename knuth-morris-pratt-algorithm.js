// O(m + n) | O(m)
const knuthMorrisPrattAlgorithm = (str, substr) => {
  const pattern = buildPattern(substr)
  console.log(pattern)
  return doesMatch(str, substr, pattern) 
}

const doesMatch = (str, substr, pattern) => {
  let i=0
  let j=0
  while(i+substr.length-j<=str.length){
    if(str[i] === substr[j]){
      if(j===substr.length-1){
        return true
      }
      i++
      j++
    } else if(j>0) {
      j = pattern[j-1]+1
    } else {
      i++
    }
  }
}

const buildPattern = (substr) => {
  const pattern = Array(substr.length).fill(-1)
  let j=0, i=1
  while(i<substr.length){
    if(substr[i] === substr[j]){
      pattern[i] = j
      i++
      j++
    } else if(j>0){
      j = pattern[j-1]+1
    } else {
      i++
    }
  }
  return pattern
}

const substr = "aefaedaefaefa"
const str = "aefaefaefaedaefaedaefaefa"

knuthMorrisPrattAlgorithm(str, substr)