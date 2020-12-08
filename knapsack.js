// [[value for one such item, weight of one such item]]
const items = [[1, 2], [4, 3], [5, 6], [6, 7]]
const capacity = 10

const knapsack = (items, capacity) => {
  const knapsackValues = []
  for(let i=0; i<items.length+1; i++){
    const arr = []
    for(let j=0; j<capacity+1; j++){
      arr.push(0)
    }
    knapsackValues.push(arr)
  }
  for (let i = 1; i < items.length + 1; i++) {
    const currentValue = items[i - 1][0]
    const currentWeight = items[i - 1][1]
    for (let c = 1; c < capacity + 1; c++) {
      if (currentWeight <= c) {
        knapsackValues[i][c] = Math.max(knapsackValues[i - 1][c], knapsackValues[i - 1][c - currentWeight] + currentValue)
      } else {
        knapsackValues[i][c] = knapsackValues[i - 1][c]
      }
    }
  }
  return [knapsackValues[knapsackValues.length-1][knapsackValues[0].length-1], getKnapsackItems(knapsackValues, items)]
}

const getKnapsackItems = (values, items) => {
  let sum = values[values.length-1][values[0].length-1]
  const sequence = []
  let currentRow = values.length-1
  let currentCol = values[0].length-1
  while(sum!==0){
    if(values[currentRow][currentCol] !== values[currentRow-1][currentCol]){
      sequence.push(items[currentRow-1])
      sum -= items[currentRow-1][0]
      currentRow = currentRow-1
      currentCol= currentCol- items[currentRow-1][1]
    } else {
      currentRow = currentRow-1
    }
  }
  return sequence
}

console.log(knapsack(items, capacity))