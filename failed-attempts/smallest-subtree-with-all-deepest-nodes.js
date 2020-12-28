var subtreeWithAllDeepest = function(root) {
  let paths = []
  let maxLength = 0
  const dfs = (root, path) => {
      if(!root) return
      path += `^${root.val}`
      if(!root.right && !root.left){
          if(paths.length===0){
              paths.push(path)
          } else {
              const currentLength = path.split("^").length
              if(currentLength > maxLength){
                  maxLength = currentLength
                  paths = []
                  paths.push(path)
              } else if(currentLength === maxLength){
                  paths.push(path)
              }
          }
      }
      const left = dfs(root.left, path)
      const right = dfs(root.right, path)
      return 
  }
  dfs(root, "")
  paths = paths.map(p => p.split("^").filter(s => !!s).map(i => parseInt(i)))
  let currentCommon = null
  let common = null
  for(let pos in paths[0]){
      currentCommon = paths[0][pos]
      for(let path of paths){
          if(path[pos] !== currentCommon){
              return findNode(root, common)
          }
      }
      common = currentCommon
  }
  return findNode(root, common)
};

const findNode = (root, val) => {
  if(!root) return null
  if(val===root.val)return root
  let left = findNode(root.left, val)
  let right = findNode(root.right, val)
  return left || right
}