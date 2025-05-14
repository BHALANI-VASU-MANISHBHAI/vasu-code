import React, { useState } from 'react'
import Chai from './Chai.jsx'

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
    console.log(counter);
  }

  return (
    <>
      <h1>Vite + React + Tailwind CSS</h1>
      <button onClick={increment}>Click me</button>
      <h1>Counter: {counter}</h1>
    </>
  )
}

export default App
