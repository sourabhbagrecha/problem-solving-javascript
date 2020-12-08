const findLongestPalindromeAtPos = (str, pos, mode) => {
  let left = pos-1
  let right = mode === "odd" ? pos+1 : pos
  while(left>=0 && right<str.length){
    if(str[left] !== str[right]){
      break
    }
    left--
    right++
  }
  return [left+1, right, right-left]
}

const findLongestPalindromicString = (str) => {
  let max = [0,1,1]
  for(let i=0; i<str.length; i++){
    const odd = findLongestPalindromeAtPos(str, i, "odd")
    const even = findLongestPalindromeAtPos(str, i, "even")
    const longest = odd[2] > even[2] ? odd : even
    max = max[2] >= longest[2] ? max : longest
  }
  return str.slice(max[0], max[1])
}

console.log(findLongestPalindromicString("abaxylzzl`yxf"))