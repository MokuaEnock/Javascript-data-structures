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

  class LinkedList{
    constructor(){
        this.head
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
