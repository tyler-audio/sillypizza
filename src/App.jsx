import { useState } from 'react'
import './App.css'

import Pizza from './components/Pizza';

function App() {
  // each gen has a specific number of "slices"
  // calculated by: slices = 2**gen
  const gens = [0,1,2,3,4,5];
  const gen = gens[4];

  return (
    <div id="App">
      <Pizza gen={gen}/>
    </div>
  )
}

export default App
