class SuffixTrie {
  constructor(str) {
    this.endSymbol = "*"
    this.trie = this.buildSuffixTrie(str)
  }

  buildSuffixTrie(str) {
    const trie = {}
    for(let i=0; i<str.length; i++){
      let currentNode=trie
      for(let j=i; j<str.length; j++){
        if(!currentNode[str[j]]){
          currentNode[str[j]] = {}
        }
        currentNode = currentNode[str[j]]
      }
      currentNode[this.endSymbol] = {}
    }
    return trie
  }

  contains(str) {
    let currentNode = this.trie
    str += this.endSymbol
    for(let i=0; i<str.length; i++){
      if(!currentNode[str[i]]){
        return false
      }
      currentNode = currentNode[str[i]]
    }
    return true
  }
}

const newSuffixTrie = new SuffixTrie("sourabh")
console.log(newSuffixTrie.trie)
console.log(newSuffixTrie.contains("h"))