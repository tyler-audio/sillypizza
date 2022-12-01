import { useState } from 'react'
import './App.css'

import Pizza from './components/Pizza';

function App() {
  // each gen has a specific number of "slices"
  // calculated by: slices = 2**gen
  const gens = [0,1,2,3,4,5];
  const gen = gens[3];

  return (
    <div id="App">
      <div className="pizza-box">
        {gens.map((g) => {
          // first two generations do not render properly: require style change
          if (g > 1) return <Pizza gen={g}/>
        })}
      </div>
    </div>
  )
}

export default App
