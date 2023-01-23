export default function LinkedLists() {
  // Creating node for the linked list

  class Node {
    constructor(data) {
      // each node has a data and next property
      this.data = data
      this.next = null
    }
  }

  // creating the linked list

  class LinkedList {
    constructor() {
      // head and tail properties are used to keep track of the beginning and end of the list
      this.head = null
      this.tail = null

      //   length property keeps track of the number of elements in a list
      this.length = 0
    }

    // function to add an elemnt to the end of the list
    append(data) {
      let newNode = new Node(data)

      //   if list is empty new node becomes both head and tail
      if (!this.head) {
        this.head = newNode
        this.tail = newNode
      } else {
        // if the list is not empty the new node is added after the tail
        this.tail.next = newNode
        this.tail = newNode
      }
      this.length++
      return this
    }

    // function to add elemnt to the beginning of the list
    prepend(data) {
      let newNode = new Node(data)

      //   the newnode next property is set to the current head
      newNode.next = this.head
      this.head = newNode
      this.length++

      //   if the list is empty the new node also becomes th tail
      if (!this.tail) {
        this.tail = newNode
      } else {
        return this
      }
    }

    // fucntion to insert item into a specific position
    insert(data, index) {
      // if the index is out of range the function exists
      if (index < 0 || index > this.length) {
        return
      }

      //   if the index is 0 the elemnt is added using the prepend method
      if (index === 0) {
        this.prepend(data)
        return
      }

      //   if the index is equal to the legth of the list the item is added using the append method

      if (index === this.length) {
        this.append(data)
        return
      }

      //   create teh new node
      let newNode = new Node(data)
      let current = this.head
      let previous
      let i = 0

      //   find teh position where teh node needs to be inserted

      while (i < index) {
        previous = current
        current = current.next
        i++
      }

      //   link the new node to the previous and next elements
      previous.next = newNode
      newNode.next = current
      this.length++
      return this
    }

    // function to delete element from list
    delete(index) {
      // if teh index is out of range the function exists
      if (index < 0 || index >= this.length) {
        return
      }
      if (index === 0) {
        this.head
      }
    }
  }

  return (
    <main>
      <h2>Linked Lists</h2>
      <p>There are two types of linked lists</p>
      <p>
        Linear collection of data elements linear order is not given by their
        physical placement in memory. Each elemnt points to the next. Consist of
        a group of nodes which togetehr represent a sequence. Each node consits
        of data and a reference. The access time is linear since you have to
        traverse through each element in the list and difficult to pipeline.
        Have better cache locality.
      </p>
      <ol>
        <li>Singly Linked Lists</li>
        <li>Doubly linked lists</li>
      </ol>
      <p>
        Each element in a linked lists has a refernce that points to the next
        element in the list.
      </p>
      <p>
        Each node in a doubly linked list has a refernce to the nex and previous
        element.
      </p>
    </main>
  )
}
