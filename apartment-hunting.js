const reqs = ["G", "Sc", "St"]

const blocks = [
  {
    G: false,
    Sc: true,
    St: false
  },
  {
    G: true,
    Sc: false,
    St: false
  },
  {
    G: true,
    Sc: true,
    St: false
  },
  {
    G: false,
    Sc: true,
    St: false
  },
  {
    G: false,
    Sc: true,
    St: true
  },
]

// O(b*r) | O(b*r)
const getMinFromPrevAndNow = (i, states, req) => Math.min(states[i][req], i > 0 ? states[i - 1][req] + 1 : Infinity)
const getMinFromNowAndNext = (i, states, req) => Math.min(states[i][req], i < states.length - 1 ? states[i + 1][req] + 1 : Infinity)

const getMaxDistForApartment = (apartment) => {
  let maxDist = 0
  for(let req in apartment){
    if(apartment[req] > maxDist){
      maxDist = apartment[req]
    }
  }
  return maxDist
}

const getBestApartmentFromStates = (states) => {
  let minIdx = 0
  for(let i=0; i<states.length; i++){
    if(getMaxDistForApartment(states[i]) < getMaxDistForApartment(states[minIdx])){
      minIdx = i
    }
  }
  return minIdx
}

const apartmentHunting = (blocks, reqs) => {
  const states = blocks.map(b => {
    const curState = {}
    for(let req of reqs){
      curState[req] = b[req] ? 0 : Infinity
    }
    return curState
  })
  for (let i = 0; i < states.length; i++) {
    for(let req of reqs){
      states[i][req] = getMinFromPrevAndNow(i, states, req)
    }
  }
  for (let i = states.length - 1; i >= 0; i--) {
    for(let req of reqs){
      states[i][req] = getMinFromNowAndNext(i, states, req)
    }
  }
  return getBestApartmentFromStates(states)
}

console.log(apartmentHunting(blocks, reqs))