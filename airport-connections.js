// O( a*(a + r) + a + r + a*log(a)) | O(a + r)
const airportConnections = (airports, routes, startingAirport) => {
  const airportGraph = createAirportGraph(airports, routes)
  const unreachableAirportNodes = getUnreachableAirportNodes(airportGraph, airports, startingAirport)
  markUnreachbleConnections(airportGraph, unreachableAirportNodes)
  return getMinNumberOfNewConnections(airportGraph, unreachableAirportNodes)
}

// O(a + r) | O(a + r)
const createAirportGraph = (airports, routes) => {
  const airportGraph = {}
  for(let airport of airports){
    airportGraph[airport] = new AirportNode(airport)
  }
  for(let [airport, connection] of routes){
    airportGraph[airport].connections.push(connection)
  }
  return airportGraph
}

// O(a + r) | O(a)
const getUnreachableAirportNodes = (airportGraph, airports, startingAirport) => {
  const visitedAirports = {}
  depthFirstTraverseAirports(airportGraph, startingAirport, visitedAirports)

  const unreachableAirportNodes = []
  for(let airport of airports){
    if(!visitedAirports[airport]){
      const airportNode = airportGraph[airport]
      airportGraph[airport].isReachable = false
      unreachableAirportNodes.push(airportNode)
    }
  }
  return unreachableAirportNodes
}

const depthFirstTraverseAirports = (airportGraph, airport, visitedAirports) => {
  if(visitedAirports[airport]){
    return
  }
  visitedAirports[airport] = true
  for(let connection of airportGraph[airport].connections){
    depthFirstTraverseAirports(airportGraph, connection, visitedAirports)
  }
}

// O(a*(a + r)) | O(a)
const markUnreachbleConnections = (airportGraph, unreachableAirportNodes) => {
  for(let airportNode of unreachableAirportNodes){
    let airport = airportNode.airport
    let unreachableConnections = []
    depthFirstAddUnreachableConnections(airportGraph, airport, unreachableConnections, {})
    airportNode.unreachableConnections = unreachableConnections
  }
}

const depthFirstAddUnreachableConnections = (airportGraph, airport, unreachableConnections, visitedAirports) => {
  if(airportGraph[airport].isReachable) return
  if(visitedAirports[airport]) return
  visitedAirports[airport] = true
  unreachableConnections.push(airport)
  let connections = airportGraph[airport].connections
  for(let connection of connections){
    depthFirstAddUnreachableConnections(airportGraph, connection, unreachableConnections, visitedAirports)
  }
}

const getMinNumberOfNewConnections = (airportGraph, unreachableAirportNodes) => {
  unreachableAirportNodes.sort((a, b) => (b.unreachableConnections.length - a.unreachableConnections.length))
  let numberOfNewConnections = 0
  for(let airportNode of unreachableAirportNodes){
    if(airportNode.isReachable) continue
    airportNode.isReachable = true
    numberOfNewConnections++
    for(let connection of airportNode.unreachableConnections){
      airportGraph[connection].isReachable = true
    }
  }
  return numberOfNewConnections
}

class AirportNode {
  constructor(airport){
    this.airport = airport
    this.connections = []
    this.isReachable = true
    this.unreachableConnections = []
  }
}

const airports = ["EWR", "HND", "ICN", "JFK", "LGA", "BGI", "ORD", "DSM", "SFO", "LHR", "EYW", "SAN", "SIN", "TLV", "DEL", "DOH", "BUD", "COG"]
const routes = [
  ["EWR", "HND"],
  ["HND", "JFK"],
  ["HND", "ICN"],
  ["JFK", "LGA"],
  ["ICN", "JFK"],
  ["BGI", "LGA"],
  ["ORD", "BGI"],
  ["DSM", "ORD"],
  ["SFO", "DSM"],
  ["SFO", "SAN"],
  ["SAN", "EYW"],
  ["EYW", "LHR"],
  ["LHR", "SFO"],
  ["DEL", "DOH"],
  ["DEL", "COG"],
  ["DEL", "SIN"],
  ["COG", "SIN"],
  ["SIN", "COG"],
  ["COG", "BUD"],
  ["TLV", "DEL"],
]

console.log(airportConnections(airports, routes, "LGA"))