import { useState } from 'react'
import logo_popoyoko from '/Logo-popoyoko.svg'
import './App.css'
import React from 'react';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="http://localhost:6006/" target="_blank">
          <img src={logo_popoyoko} className="logo popoyoko" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App