const longestStringChain = (strings) => {
  const stringChains = {}
  for(let i=0; i<strings.length; i++){
    stringChains[strings[i]] = {
      nextString: "",
      maxChainLength: 1
    }
  }
  strings.sort((a, b) => (a.length - b.length))
  for(let i=0; i<strings.length; i++){
    for(let j=0; j<strings[i].length; j++){
      const strNow = strings[i].slice(0, j) + strings[i].slice(j+1, strings[i].length)
      if(stringChains[strNow]){
        updateLongestStringChain(strings[i], strNow, stringChains)
      }
    }
  }
  return buildLongestStringChain(strings, stringChains)
}

const updateLongestStringChain = (current, smaller, stringChains) => {
  const smallerStringChainLength = stringChains[smaller].maxChainLength
  const currentStringChainLength = stringChains[current].maxChainLength
  if(smallerStringChainLength + 1 > currentStringChainLength){
    stringChains[current].maxChainLength = smallerStringChainLength + 1
    stringChains[current].nextString = smaller
  }
}

const buildLongestStringChain = (strings, stringChains) => {
  const results = []
  let maxChainLength = 0
  let chainStartsAt = ""
  for(let i=0; i<strings.length; i++){
    if(stringChains[strings[i]].maxChainLength > maxChainLength){
      maxChainLength = stringChains[strings[i]].maxChainLength
      chainStartsAt = strings[i]
    }
  }
  let currentStr = stringChains[chainStartsAt]
  results.push(chainStartsAt)
  while(currentStr){
    results.push(currentStr.nextString)
    currentStr = stringChains[currentStr.nextString]
  }
  return results
}

const strings = ["abde", "abc", "abd", "abcde", "ade", "ae", "1abde", "abcdef"]

console.log(longestStringChain(strings))