const arrData = [234, 45634, 23, 41, 2345, 34, 23, 1, 4, 3, 6, 234, 4536]
function Node(data) {
    this.data = data
    this.next = null
}
function LinkedList() {
    this._length = 0
    this._head = null
}
LinkedList.prototype.append = function(data) {
    const node = new Node(data)
    let curr

    if (this._head === null) this._head = node
    else {
        curr = this._head
        while (curr.next) curr = curr.next
        curr.next = node
    }
    this._length++
}
LinkedList.prototype.toArray = function() {
    let curr = this._head
    let arr = []

    while (curr) {
        arr.push(curr.data)
        curr = curr.next
    }

    return arr
}
const list = new LinkedList()
list.append(15)
list.append(10)
list.append(5)

list.toArray()
