class Node {
  constructor(name){
    this.name = name
    this.ancestor = null
  }
}

const findYoungestCommonAncestor = (topAncestor, descendantOne, descendantTwo) => {
  let depthOne = getDescendantDepth(descendantOne, topAncestor)  
  let depthTwo = getDescendantDepth(descendantTwo, topAncestor)
  if(depthOne>depthTwo){
    return backtrackAncestralTree(descendantOne, descendantTwo, depthOne-depthTwo)
  } else {
    return backtrackAncestralTree(descendantTwo, descendantOne, depthTwo-depthOne)
  }
}

const getDescendantDepth = (descendant, topAncestor) => {
  let depth = 0
  while(descendant.name != topAncestor.name){
    depth++
    descendant = descendant.ancestor
  }
  return depth
}

const backtrackAncestralTree = (lowerDescendant, higherDescendant, diff) => {
  while(diff>0){
    lowerDescendant = lowerDescendant.ancestor
    diff--
  }
  while(lowerDescendant.name != higherDescendant.name){
    lowerDescendant = lowerDescendant.ancestor
    higherDescendant = higherDescendant.ancestor
  }
  return lowerDescendant
}

const A = new Node("A")
const B = new Node("B")
const C = new Node("C")

B.ancestor = A
C.ancestor = A

const D = new Node("D")
const E = new Node("E")

D.ancestor = B
E.ancestor = B

const F = new Node("F")
const G = new Node("G")

F.ancestor = C
G.ancestor = C

const H = new Node("H")
const I = new Node("I")

H.ancestor = D
I.ancestor = D

const J = new Node("J")
const K = new Node("K")

J.ancestor = H
K.ancestor = H

console.log(findYoungestCommonAncestor(A, J, K))