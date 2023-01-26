import React, {useState} from "react"
import {texts} from "./data"

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <section className="section-center">
      <h3> Tired of the boring old Lorem Ipsum</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">
          Paragraphs:
          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={e => setCount(e.target.value)}
          />
          <button type="submit" className="btn">
            generate
          </button>
        </label>
      </form>
      <article className="lorem-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat,
          culpa a error vitae quaerat nihil nostrum dolores, ab sunt
          consequuntur voluptate labore reprehenderit eius cupiditate nulla in
          rerum explicabo.
        </p>
      </article>
      <article className="lorem-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fugiat,
          culpa a error vitae quaerat nihil nostrum dolores, ab sunt
          consequuntur voluptate labore reprehenderit eius cupiditate nulla in
          rerum explicabo.
        </p>
      </article>
    </section>
  )
}

export default App
