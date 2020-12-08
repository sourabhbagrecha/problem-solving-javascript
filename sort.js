const swap = (arr, idx1, idx2) => {
    const temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

const bubbleSort = (arr) => {
    for(let i=0; i<arr.length; i++){
        let noSwaps = true
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j]>arr[j+1]){
                swap(arr, j, j+1)
                noSwaps = false
            }
        }
        if(noSwaps){
            break
        }
    }
    return arr
}

const insertionSort = (arr) => {
    for(let i=1; i<arr.length; i++){
        let j=i
        while(j>0 && arr[j]<arr[j-1]){
            swap(arr, j, j-1)
            j--
        }
    }
    return arr
}

const selectionSort = (arr) => {
    for(let i=0; i<arr.length-1; i++){
        let minPosition = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[minPosition]>arr[j]){
                minPosition = j
            }
        }
        if(minPosition != i){
            swap(arr, minPosition, i)
        }
        console.log(minPosition, i, arr)
    }
    return arr
}

const arr = [8, 5, 2, 9, 5, 6, 3]

module.exports = {
    swap
}