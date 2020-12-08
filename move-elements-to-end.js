const { swap } = require("./sort")

const arr = [2, 1, 2, 2, 2, 3, 4, 2]

const moveElementsToEnd = (arr, num) => {
    let i=0, nonNumIdx = arr.length-1
    while(arr[nonNumIdx] === num) nonNumIdx-- //worst case O(n)
    while(arr[i] !== num) i++ //worst case O(n)
    while(i<nonNumIdx){ //worst case O(n.k) where k is the number of num present in the array
        if(arr[i] === num){
            swap(arr, i, nonNumIdx)
            nonNumIdx--
        }
        i++
        while(arr[nonNumIdx] === num) nonNumIdx--
    }
    return arr
}

console.log(moveElementsToEnd(arr, 2))