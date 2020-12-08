const groupAnagram = (arr) => {
  const sortedAnagrams = []
  const state = {}
  const results = []
  for (let i = 0; i < arr.length; i++) {
    sortedAnagrams
      .push(
        arr[i]
          .split("")
          .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
          .join("")
      )

    if (!state[sortedAnagrams[i]]) {
      state[sortedAnagrams[i]] = [arr[i]]
    } else {
      state[sortedAnagrams[i]].push(arr[i])
    }
  }
  for (let key in state) {
    results.push(state[key])
  }

  return results
}

const arr = ["yo", "act", "flop", "tac", "cat", "oy", "olfp"]

console.log(groupAnagram(arr))