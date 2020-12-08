const str = "testthis is a testtest to see if testestest it works"
const substr = "test"

const underscorifyStrings = (str, substr) => {
  return underscorify(str, collapseLocations(getLocations(str, substr)))
}

const getLocations = (str, substr) => {
  const locations = []
  let startIdx = 0
  while (startIdx < str.length) {
    let nextIdx = str.indexOf(substr, startIdx)
    if(nextIdx===-1){
      break
    }
    locations.push([nextIdx, nextIdx + substr.length])
    startIdx = nextIdx+1
  }
  return locations
}

const collapseLocations = (locations) => {
  if(locations.length===0){
    return locations
  }
  const newLocations = [locations[0]]
  let prev = newLocations[0]
  for(let i=0; i<locations.length; i++){
    let current = locations[i]
    if(current[0]<=prev[1]){
      prev[1] = current[1]
    } else {
      newLocations.push(current)
      prev = current
    }
  }
  return newLocations
}

const underscorify = (str, locations) => {
  const finalChars = []
  let i = 0
  let inBetweenUnderscores = false
  let stringIdx = 0
  let locationsIdx = 0
  while(stringIdx<str.length && locationsIdx<locations.length){
    if(stringIdx === locations[locationsIdx][i]){
      finalChars.push("_")
      inBetweenUnderscores = !inBetweenUnderscores
      if(!inBetweenUnderscores){
        locationsIdx++
      }
      i = i === 0 ? 1 : 0
    }
    finalChars.push(str[stringIdx])
    stringIdx++
  }
  if(locationsIdx<locations.length){
    finalChars.push("_")
  }
  if(stringIdx<str.length){
    finalChars.push(str.slice(stringIdx, str.length-1))
  }
  return finalChars.join("")
}

console.log(underscorifyStrings(str, substr))