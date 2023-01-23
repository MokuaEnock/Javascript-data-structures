export default function Queues() {
  //create a class for each node within the node

  class Node {
    // adding properties of a node taht is pointer and value

    constructor(value) {
      this.value = value
      this.next = null
    }
  }

  //   class for the queue

  class Queue {
    constructor() {
      this.first = null
      this.last = null
      this.size = 0
    }

    // enqueue method receives avlue and adds it to the end of the list
    enqueue(value) {
      let newNode = new Node(value)
      if (!this.first) {
        this.first = newNode
        this.last = newNode
      } else {
        this.last.next = newNode
        this.last = newNode
      }

      return ++this.size
    }
  }
  return (
    <main>
      <h2>Queue</h2>
      <p>
        In a queue elements are added or removed out of order. They follow a
        First In First Out pattern (FIFO). There are two main processes that
        take place in a queue
      </p>
      <ul>
        <li>Enqueue - addition of elements to teh rear terminal position.</li>
        <li>Dequeue - addition of elements to the front terminal position.</li>
      </ul>
    </main>
  )
}
