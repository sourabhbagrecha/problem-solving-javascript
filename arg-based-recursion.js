const sum = (a) => {
  return (b) => {
    if(!b) return a
    return sum(a+b)
  }
}

const mult = (a) => {
  return (b) => {
    if(!b) return a
    return mult(a*b)
  }
}

console.log(sum(1)(2)(3)(4)(5)(6)())