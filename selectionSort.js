const arrData = [234, 45634, 23, 41, 2345, 34, 23, 1, 4, 3, 6, 234, 4536]
const swap = (arr, firstIndex, lastIndex) => {
    const temp = arr[firstIndex]
    arr[firstIndex] = arr[lastIndex]
    arr[lastIndex] = temp
}
const selectionSort = arr => {
    let len = arr.length
    let min = null

    for (let i = 0; i < len - 1; i++) {
        min = i
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) min = j
        }
        swap(arr, i, min)
    }

    return arr
}

selectionSort(arrData)
