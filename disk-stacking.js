const disks = [
  [2, 2, 1],
  [2, 1, 2],
  [3, 2, 3],
  [2, 3, 4],
  [4, 4, 5],
  [2, 2, 8],
]

const diskStacking = (disks) => {
  disks.sort((a, b) => (a[2] - b[2]))
  const heights = disks.map(a => a[2])
  const sequences = Array(disks.length).fill(null)
  let maxHeightIdx = 0
  for (let i = 0; i < disks.length; i++) {
    const currentDisk = disks[i]
    for (let j = 0; j < i; j++) {
      const otherDisk = disks[j]
      if (currentDisk[0] > otherDisk[0] && currentDisk[1] > otherDisk[1] && currentDisk[2] > otherDisk[2]) {
        if(heights[i] <= currentDisk[2]+heights[j]){
          heights[i] = currentDisk[2]+heights[j]
          sequences[i] = j
        }
      }
    }
    if(heights[i]>=heights[maxHeightIdx]){
      maxHeightIdx = i
    }
  }
  return [heights[maxHeightIdx], buildSequence(disks, sequences, maxHeightIdx)]
}

const buildSequence = (disks, sequences, maxHeightIdx) => {
  const sequence = []
  let currentIdx = maxHeightIdx
  while(currentIdx){
    sequence.push(disks[currentIdx])
    currentIdx = sequences[currentIdx]
  }
  return sequence
}

console.log(diskStacking(disks))