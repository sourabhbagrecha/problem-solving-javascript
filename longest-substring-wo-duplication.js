const longestSubStringWithoutDuplication = (str) => {
  const lastSeen = {}
  let longest = [0, 1]
  let startIdx = 0
  for(let i=0; i<str.length; i++){
    if(lastSeen[str[i]]){
      startIdx = Math.max(startIdx, lastSeen[str[i]]+1)
    }
    if(((longest[1]-longest[0])<(i+1-startIdx)) && str[i-1]!==str[i]){
      longest = [startIdx, i+1]
    }
    lastSeen[str[i]] = i
  }
  return str.slice(longest[0], longest[1])
}

console.log(longestSubStringWithoutDuplication("sourabhbagrecha"))