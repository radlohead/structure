const arrData = [234, 45634, 23, 41, 2345, 34, 23, 1, 4, 3, 6, 234, 4536]
const quickSort = arr => {
    if (!arr.length) return []

    const middle = arr[0]
    const left = []
    const right = []

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < middle) left.push(arr[i])
        else right.push(arr[i])
    }

    return quickSort(left).concat(middle, quickSort(right))
}

quickSort(arrData)
