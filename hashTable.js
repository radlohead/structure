const hashTable = arr => {
    let result = {}
    for (i of arr.keys()) {
        if (result[arr[i]]) result[arr[i]]++
        else result[arr[i]] = 1
    }

    return result
}

const votes = ['Thomas', 'John', 'John', 'Thomas', 'John']
hashTable(votes)
