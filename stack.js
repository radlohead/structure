const bracketCheck = code => {
    const openBracket = '({['
    const closeBracket = ')}]'
    const successBracket = '(){}[]'
    const stack = []

    for (const char of code) {
        if (openBracket.includes(char)) stack.push(char)
        if (closeBracket.includes(char)) {
            if (successBracket.includes(stack[stack.length - 1] + char)) {
                stack.pop()
            } else return false
        }
    }

    return stack.length ? false : true
}

const code = '(const x = {y: [1, 2, 3]})'
bracketCheck(code)

const reverseArr = arr => {
    return arr.reduceRight((p, c) => {
        return p.concat(c)
    }, [])
}

reverseArr([1, 2, 3])
