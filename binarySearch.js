const binarySearch = (arr, target) => {
    let upperBound = arr.length - 1
    let lowerBound = 0

    while (lowerBound <= upperBound) {
        let mid = Math.floor((lowerBound + upperBound) / 2)
        if (arr[mid] > target) upperBound = mid - 1
        if (arr[mid] < target) lowerBound = mid + 1
        if (arr[mid] === target) return mid
    }
    return -1
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)
