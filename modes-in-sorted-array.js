const findModes = () => {
  const arr = [1,2,3,3,3,3,4,5,6,6,7,8,8,8,8,9]
  let modes = []
  let max = 0
  let count = 1
  let prev = null
  for(let i=0; i<arr.length; i++){
    const current = arr[i]
    if(prev){
      if(current === prev){
        count++
      } else {
        count = 1
      }
    }
    if(count>max){
      max = count
      modes = [current]
    } else if(count === max) {
      modes.push(current)
    }
    prev = current
  }
  return modes
}

console.log(findModes())