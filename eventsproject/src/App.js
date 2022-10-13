import { useState } from "react"
import "./App.css"

function App() {
  const [counter, anyFunction] = useState(0)
  const handleIncr = () => {
    anyFunction(counter + 1)
  
  }
  const handleDecr = () => {
    anyFunction(counter>0 ? counter-1 :0)    

  }
  const handleReset = () => {
    anyFunction (0)
  }
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleIncr}>+</button>
      <button onClick={handleDecr}>-</button>
      <button onClick={handleReset}>R</button>
    </div>
  )
}
export default App;
