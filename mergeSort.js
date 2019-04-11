const arrData = [234, 45634, 23, 41, 2345, 34, 23, 1, 4, 3, 6, 234, 4536]
const mergeSort = arr => {
    if (arr.length < 2) return arr
    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle, arr.length)

    const merge = (left, right) => {
        const result = []
        while (left.length && right.length) {
            if (left[0] <= right[0]) result.push(left.shift())
            else result.push(right.shift())
        }
        while (left.length) result.push(left.shift())
        while (right.length) result.push(right.shift())
        return result
    }
    return merge(mergeSort(left), mergeSort(right))
}

mergeSort(arrData)
