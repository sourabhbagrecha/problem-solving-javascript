const UP = "UP"
const DOWN = "DOWN"
const LEFT = "LEFT"
const RIGHT = "RIGHT"

// O(n^2) | O(n^2)
// const rectangleMania = (coords) => {
//   const coordsTable = getCoordsTable(coords)
//   return getRectangleCount(coords, coordsTable)
// }

// const getCoordsTable = (coords) => {
//   const coordsTable = {}

//   for(let coord1 of coords){
//     let coordDirections = {
//       UP: [],
//       DOWN: [],
//       LEFT: [],
//       RIGHT: [],
//     }
//     for(let coord2 of coords){
//       const currentDir = getCoordDirection(coord1, coord2)
//       if(currentDir){
//         coordDirections[currentDir].push(coord2)
//       }
//     }
//     coordsTable[getCoordString(coord1)] = coordDirections
//   }

//   return coordsTable
// }

// const getCoordDirection = (coord1, coord2) => {
//   let [x1, y1] = coord1
//   let [x2, y2] = coord2
//   if(x2 === x1 && y2 > y1){
//     return UP
//   }
//   if(x2 === x1 && y2 < y1){
//     return DOWN
//   }
//   if(y2 === y1 && x2 > x1){
//     return RIGHT
//   }
//   if(y2 === y1 && x2 < x1){
//     return LEFT
//   }
// }

// const getCoordString = (coord) => {
//   return `${coord[0]}-${coord[1]}`
// }

// const getRectangleCount = (coords, coordsTable) => {
//   let count = 0
//   for(let coord of coords){
//     count += clockwiseCountRectangle(coord, coordsTable, UP, coord)
//   }
//   return count
// }

// const clockwiseCountRectangle = (coord, coordsTable, direction, origin) => {
//   const coordString = getCoordString(coord)
//   if(direction === LEFT){
//     let rectFound = coordsTable[coordString][LEFT].findIndex(c => getCoordString(c) === getCoordString(origin))
//     return rectFound === -1 ? 0 : 1
//   } else {
//     const nextDir = getNextDirection(direction);
//     let rectangleCount = 0
//     for(let coord1 of coordsTable[coordString][direction]){
//       rectangleCount += clockwiseCountRectangle(coord1, coordsTable, nextDir, origin)
//     }
//     return rectangleCount
//   }
// }

// const getNextDirection = (direction) => {
//   switch(direction){
//     case UP: return RIGHT
//     case RIGHT: return DOWN
//     case DOWN: return LEFT
//   }
// }

// O(n^2) | O(n)
// const rectangleMania = (coords) => {
//   const coordsTable = getCoordsTable(coords)
//   return getRectanglesCount(coords, coordsTable)
// }

// const getCoordsTable = (coords) => {
//   const coordsTable = {
//     x: {},
//     y: {}
//   }
//   for(let coord of coords){
//     const [x, y] = coord
//     if(!coordsTable["x"][x]){
//       coordsTable["x"][x] = []
//     }
//     coordsTable["x"][x].push(coord)
//     if(!coordsTable["y"][y]){
//       coordsTable["y"][y] = []
//     }
//     coordsTable["y"][y].push(coord)
//   }
//   return coordsTable
// }

// const getRectanglesCount = (coords, coordsTable) => {
//   let count = 0
//   for(let coord of coords){
//     const lowerLeftY = coord[1]
//     count += clockwiseCountRectangle(coord, coordsTable, UP, lowerLeftY)
//   }
//   return count
// }

// const clockwiseCountRectangle = (coord1, coordsTable, direction, lowerLeftY) => {
//   const [x1, y1] = coord1
//   if(direction === DOWN){
//     const relevantCoords = coordsTable["x"][x1]
//     for(let rCoord of relevantCoords){
//       const lowerRightY = rCoord[1]
//       if(lowerRightY === lowerLeftY){
//         return 1
//       }
//     }
//     return 0
//   } else {
//     let rectangleCount = 0
//     if(direction === UP){
//       const relevantCoords = coordsTable["x"][x1]
//       for(let coord2 of relevantCoords){
//         const [x2, y2] = coord2
//         let isAbove  = y2 > y1
//         if(isAbove){
//           rectangleCount += clockwiseCountRectangle(coord2, coordsTable, RIGHT, lowerLeftY)
//         }
//       }
//     } else if(direction === RIGHT){
//       const relevantCoords = coordsTable["y"][y1]
//       for(let coord2 of relevantCoords){
//         const [x2, y2] = coord2
//         const isRight = x2 > x1
//         if(isRight){
//           rectangleCount += clockwiseCountRectangle(coord2, coordsTable, DOWN, lowerLeftY)
//         }
//       }
//     }
//     return rectangleCount
//   } 
// }

const rectangleMania = (coords) => {
  const coordsTable = getCoordsTable(coords)
  return getRectanglesCount(coords, coordsTable)
}

const getCoordsTable = (coords) => {
  const coordsTable = {}
  for (let coord of coords) {
    coordsTable[getCoordString(coord)] = true
  }
  return coordsTable
}

const getRectanglesCount = (coords, coordsTable) => {
  let rectangleCount = 0
  for (let coord1 of coords) {
    for (let coord2 of coords) {
      const [x1, y1] = coord1
      const [x2, y2] = coord2
      if(isUpperRight(coord1, coord2)){
        const upperLeft = getCoordString([x1, y2])
        const lowerRight = getCoordString([x2, y1])
        if(coordsTable[upperLeft] && coordsTable[lowerRight]){
          rectangleCount += 1
        }
      }
    }
  }
  return rectangleCount
}

const isUpperRight = (coord1, coord2) => {
  const [x1, y1] = coord1
  const [x2, y2] = coord2
  return x2 > x1 && y2 > y1
}

const getCoordString = (coord) => `${coord[0]}-${coord[1]}`

const coords = [
  [0, 0],
  [0, 1],
  [1, 1],
  [2, 1],
  [2, 0],
  [1, 0],
]

console.log(rectangleMania(coords))