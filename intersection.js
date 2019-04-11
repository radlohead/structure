const intersection = (firstArray, secondArray) => {
    const secondSet = new Set(secondArray)
    const result = firstArray.filter(v => {
        if (secondSet.has(v)) return true
    })

    return result
}

intersection([3, 1, 4, 2], [4, 5, 3, 6]) // [3, 4]
