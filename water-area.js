const getWaterArea = (arr) => {
  let biggestLeft = 0
  let biggestRight = 0
  const maxes = Array(arr.length).fill([0,0])
  const waterLevels = Array(arr.length).fill(0)

  for(let i=1; i<arr.length; i++){
    if(arr[i-1]>biggestLeft){
      biggestLeft = arr[i-1]
    }
    maxes[i] = [biggestLeft, maxes[i][1]]
  }

  for(let i=arr.length-2; i>=0; i--){
    if(arr[i+1]>biggestRight){
      biggestRight = arr[i+1]
    }
    maxes[i] = [maxes[i][0], biggestRight]
  }

  for(let i=0; i<waterLevels.length; i++){
    waterLevels[i] = Math.max(Math.min(maxes[i][0], maxes[i][1])-arr[i], 0) 
  }

  return waterLevels.reduce((acc, v) => (acc+v), 0)
}

const arr = [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]

console.log(getWaterArea(arr))