// O(b^2 + ns) | O(b^2 + n)
class SuffixTrie {
  constructor(str){
    this.root = {}
    this.build(str)
  }
  build(str) {
    for(let i in str){
      this.insert(str.slice(i))
    }
  }
  insert(val) {
    let current = this.root
    let idx = 0
    if(!val[idx] || val[idx] === " "){
      return
    }
    while(idx<val.length){
      if(!current[val[idx]]){
        if(idx===val.length-1){
          current[val[idx]] = val
          break
        }
        current[val[idx]] = {}
      }
      current = current[val[idx]]
      idx++
    }
  }
  contains(val){
    let current = this.root
    let idx = 0
    while(idx<val.length){
      if(!current[val[idx]]){
        return false
      }
      current = current[val[idx]]
      idx++
    }
    return true
  }
}

const newTrie = new SuffixTrie("this is a big string")
const values = ["this","yo", "is", "a", "bigger", "string", "kappa"]
const results = []
for(let value of values){
  results.push(newTrie.contains(value))
}
// console.log(newTrie.root)
console.log(results)