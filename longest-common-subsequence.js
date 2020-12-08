const longestCommonSubsequence = (str1, str2) => {
  str1 = str1.split("")
  str2 = str2.split("")
  const str1Length = str1.length+1
  const str2Length = str2.length+1
  let matx = Array(str1Length).fill(Array(str2Length).fill(""))
  for(let row=1; row<str1Length; row++){
    for(let col=1; col<str2Length; col++){
      if(str1[row-1]===str2[col-1]){
        matx[row][col] = matx[row-1][col-1]+str1[row-1]
        console.log(matx[row][col])
      }else{
        // console.log(matx[row][col-1], matx[row][col])
        matx[row][col] = matx[row][col-1].length > matx[row-1][col].length ? matx[row][col-1] : matx[row-1][col]
      }
    }
  }
  return matx
}

console.log(longestCommonSubsequence("xkykzpw", "zxvvyzw"))