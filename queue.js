const print = {
    result: [],
    queuePrintJob: documentStr => {
        print.result.push(documentStr)
    },
    run: () => {
        for (const a of print.result) {
            console.log(a)
        }
    }
}

print.queuePrintJob('aaa')
print.queuePrintJob('bbb')
print.run()
