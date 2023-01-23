export default function Stacks() {
  class Stack {
    constructor() {
      // initialize emty array to store stack elemnts
      this.items = []
    }

    // push element to the top of the stack
    push(element) {
      this.items.push(element)
    }

    // remove and return top element of stack
    pop() {
      if (this.isEmpty()) {
        return 'underflow'
      }
      return this.items.pop()
    }

    // return the top elemnt of teh stack without reoving it
    peek() {
      if (this.isEmpty()) {
        return 'The stack is empty'
      }
      return this.items[this.items.length - 1]
    }

    isEmpty() {
      return this.items.length === 0
    }
  }
  return (
    <main>
      <h2>Stacks</h2>
      <p>
        A stack is an abstarct data type taht serves as a ccollection of
        elements with two principal operations.
        <ul>
          <li>Push</li>
          <li>Pop</li>
        </ul>
        Push adds an element to the collection while pop removes tehmost
        recently added element taht has not yet been removed.
        <br />
        Stacks use the LIFO pattern that is the Last In First Out pattern. A
        good example of stacks is a set of physical items suchas books stacked
        on top of one another.
        <br />
        Examples od stacks include
        <ul>
          <li>Javascript call Stacks</li>
          <li>
            Managing function invocations in various programming languages
          </li>
          <li>
            Undo redo fucntionality implemented in different programming
            languages
          </li>
        </ul>
      </p>
    </main>
  )
}
