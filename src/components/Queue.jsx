export default function Queues() {
  //create a class for each node within the node

  class Node {
    // adding properties of a node taht is pointer and value

    constructor(value) {
      this.value = value
      this.next = null
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
