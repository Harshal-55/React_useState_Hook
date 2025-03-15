import {useState} from 'react'

import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    console.log("value clicked",counter)
    // counter =counter+1
   setCounter(counter + 1)
  }

  const removeVal = () => {
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Hello MetaMorpH</h1>
      <h3>Counter value: {counter} </h3>

      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeVal}
      >remove value {counter}</button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
