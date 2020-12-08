const smallestDifference = (arr1, arr2) => {
    arr1.sort((a, b) => a-b)
    arr2.sort((a, b) => a-b)
    let minDiff = Infinity
    let idx1= 0, idx2 = 0
    let smallestPair = {
        first: 0,
        second: 0
    }
    while(idx1 < arr1.length && idx2 < arr1.length){
        let first = arr1[idx1], second = arr2[idx2]
        let currentDiff = Math.abs(first - second)
        if(currentDiff === 0) return ({ first, second })
        if(currentDiff < minDiff) {
            minDiff = currentDiff
            smallestPair = { first, second }
        }
        if(first < second){
            idx1++
        } else {
            idx2++
        }
    }
    return smallestPair
}

const arr1 = [-1, 5, 10, 20, 28, 3]
const arr2 = [26, 134, 135, 15, 17]

console.log(smallestDifference(arr1, arr2))