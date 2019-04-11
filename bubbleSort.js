const arrData = [234, 45634, 23, 41, 2345, 34, 23, 1, 4, 3, 6, 234, 4536]
const swap = (arr, firstIndex, lastIndex) => {
    const temp = arr[firstIndex]
    arr[firstIndex] = arr[lastIndex]
    arr[lastIndex] = temp
}
const bubbleSort = arr => {
    let len = arr.slice().length

    while (--len > 0) {
        for (let i = 0; i < len; i++) {
            if (arr[i] > arr[i + 1]) swap(arr, i, i + 1)
        }
    }

    return arr
}

bubbleSort(arrData)
