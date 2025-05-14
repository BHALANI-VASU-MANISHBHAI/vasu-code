import { useState } from 'react'
import './App.css'
import Card  from './componets/Card'  
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card  text="hello"   />
      <Card  text="hello"   />
      <Card  text="hello"   />
    </>
  )
}

export default App
