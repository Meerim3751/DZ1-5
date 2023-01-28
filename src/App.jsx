import { useState } from 'react'
import ChangeColor from './hoc/ChangeColor'
import ColorComponent from './Components/ColorComponent'
import './App.css'

function App() {
  const ChangeColorComponent = ChangeColor(ColorComponent)
  return (
    <div className="App">
      <ChangeColorComponent/>
  
    </div>
  )
}

export default App
