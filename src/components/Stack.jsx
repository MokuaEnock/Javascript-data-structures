export default function Stacks() {
  class Stack {
    constructor() {
      // initialize emty array to store stack elemnts
      this.items = []
    }

    push(element) {
      this.items.push(element)
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
