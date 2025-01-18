import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonComponent from './ButtonCompoenent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Ref ex 1</h2>
      <ButtonComponent />
      <h2>--------------------</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      
    </>
  )
}

export default App
