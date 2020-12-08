const getRiver = (matrix, visited, row, col) => {
  let size = 0
  let nodesToExplore = [[row, col]]
  while (nodesToExplore.length > 0) {
    let [currentRow, currentCol] = nodesToExplore.pop()
    if (visited[currentRow][currentCol]) continue
    visited[currentRow][currentCol] = true
    size++
    if (currentRow < matrix.length - 1 && matrix[currentRow + 1][currentCol] === 1 && !visited[currentRow + 1][currentCol]) {
      nodesToExplore.push([currentRow + 1, currentCol])
    }
    if (currentRow > 0 && matrix[currentRow - 1][currentCol] === 1 && !visited[currentRow - 1][currentCol]) {
      nodesToExplore.push([currentRow - 1, currentCol])
    }
    if (currentCol < matrix[0].length - 1 && matrix[currentRow][currentCol + 1] === 1 && !visited[currentRow][currentCol + 1]) {
      nodesToExplore.push([currentRow, currentCol + 1])
    }
    if (currentCol > 0 && matrix[currentRow][currentCol - 1] === 1 && !visited[currentRow][currentCol - 1]) {
      nodesToExplore.push([currentRow, currentCol - 1])
    }
  }
  return size
}

const getRiverSizes = (matrix) => {
  const sizes = []
  const visited = matrix.map(row => row.map(e => false))
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0 || visited[row][col] === true) continue
      sizes.push(getRiver(matrix, visited, row, col))
    }
  }
  return sizes.sort((a, b) => a - b)
}

console.log(getRiverSizes(
  [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1],
    [0, 1, 1, 1, 0]
  ]))