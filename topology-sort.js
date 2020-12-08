const jobs = [1,2,3,4]
const deps = [[1,2], [1,3], [3,2], [4,2], [4,3]]

// This method needs some work!
// const topologicalSort = (jobs, deps) => {
//   const jobGraph = createJobGraph(jobs, deps)
//   return getOrderedJobs(jobGraph)
// }

// const createJobGraph = (jobs, deps) => {
//   const jobGraph = new JobGraph(jobs)
//   for(let [dep, job] of deps){
//     jobGraph.addDep(job, dep)
//   }
//   return jobGraph
// }

// const getOrderedJobs = (graph) => {
//   const orderedJobs = []
//   const nodesWithNoPreReqs = graph.nodes.filter(n => n.numOfPreReqs === 0)
//   while(nodesWithNoPreReqs.length > 0){
//     const node = nodesWithNoPreReqs.pop()
//     orderedJobs.push(node.job)
//     removeDeps(node, nodesWithNoPreReqs)
//   }
//   if(graph.nodes.length>0){
//     return []
//   }
//   return orderedJobs
// }

// const removeDeps = (node, nodesWithNoPreReqs) => {
//   console.log(node, nodesWithNoPreReqs)
//   while(node.deps.length > 0){
//     const dep = node.deps.pop()
//     console.log(dep)
//     dep.numOfPreReqs--
//     if(dep.numOfPreReqs===0){
//       nodesWithNoPreReqs.push(dep)
//     }
//   }
// }

// class JobGraph {
//   constructor(jobs){
//     this.nodes = []
//     this.graph = {}
//     for(let job of jobs){
//       this.addNode(job)
//     }
//   }

//   addDep(job, dep){
//     const jobNode = this.getNode(job)
//     const depNode = this.getNode(dep)
//     jobNode.deps.push(depNode)
//     jobNode.numOfPreReqs++
//   }

//   addNode(job){
//     this.graph[job] = new JobNode(job)
//     this.nodes.push(this.graph[job])
//   }

//   getNode(job){
//     if(!this.graph[job]){
//       this.addNode(job)
//     }
//     return this.graph[job]
//   }
// }

// class JobNode {
//   constructor(job){
//     this.job = job
//     this.deps = []
//     this.numOfPreReqs = 0
//   }
// }

// O(j+d) | O(j+d)
const topologicalSort = (jobs, deps) => {
  const jobGraph = createJobGraph(jobs, deps)
  return getOrderedJobs(jobGraph)
}

const getOrderedJobs = (jobGraph) => {
  const orderedJobs = []
  const nodes = jobGraph.nodes
  while(nodes.length){
    const node = nodes.pop()
    const containsNoCycle = depthFirstTraverse(node, orderedJobs)
    if(!containsNoCycle){
      return []
    }
  }
  return orderedJobs
}

const depthFirstTraverse = (node, orderedJobs) => {
  if(node.visited){
    return true
  }
  if(node.visiting){
    return false
  }
  node.visiting = true
  for(let preReq of node.preReqs){
    const containsNoCycle = depthFirstTraverse(preReq, orderedJobs)
    if(!containsNoCycle){
      return false
    }
  }
  node.visited = true
  node.visiting = false
  orderedJobs.push(node.job)
  return true
}

const createJobGraph = (jobs, deps) => {
  const graph = new JobGraph(jobs)
  for(let [preReq, job] of deps){
    graph.addPreReq(job, preReq)
  }
  return graph
}

class JobGraph {
  constructor(jobs) {
    this.nodes = []
    this.graph = {}
    for(let job of jobs) this.addNode(job)

  }

  addNode(job){
    this.graph[job] = new JobNode(job)
    this.nodes.push(this.graph[job])
  }

  addPreReq(job, preReq){
    const jobNode = this.getNode(job)
    const preReqNode = this.getNode(preReq)
    jobNode.preReqs.push(preReqNode)
  }

  getNode(job){
    if(!this.graph[job]){
      this.addNode(job)
    }
    return this.graph[job]
  }

}

class JobNode {
  constructor(job){
    this.job = job
    this.preReqs = []
    this.visited = false
    this.visiting = false //in progress, so as to avoid deadlock(cycle of deps)
  }
}

console.log(topologicalSort(jobs, deps))