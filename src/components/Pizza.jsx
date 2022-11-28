import { useState, useEffect } from 'react';
import Slice from './Slice';

export default ({ gen }) => {
  const [rotation, setRotation] = useState(0);

  const colors = {
    2: '#D8DBE2',
    3: '#A9BCD0',
    4: '#58A4B0',
    5: '#DAA49A'
  }

  const diameter = gen * 20;
  const style = {
    zIndex: -gen,
    width: `${diameter}%`,
    height: `${diameter}%`,
    backgroundColor: colors[gen],
  }

  const numSlices = 2**gen;
  const division = 360 / numSlices; // for all slices
  let slices = [...Array(numSlices).keys()];
  let tries = 1;
  slices = slices.map((s, i) => {
    const orientation = i * division;
    let slice = i + 1;
    if (slice > slices.length / 2) {
      slice = slice - tries;
      tries += 2;
    }
    let focal = ( slice * division ) - ( division / 2 );
    if (i + 1 <= slices.length / 2) focal = -focal;
    return {
      slice,
      orientation,
      focal
    }
  });

  const handleRotate = (e, deg) => {
    e.preventDefault();

    setRotation(deg);
    document.querySelector('.pizza-box')
      .style
      .setProperty('--rotation-deg', `${deg}deg`);
  }

  return (
    <div className="pizza" style={style}>
      {slices.map((s, i) => {
        return (
          <Slice
            className={`child c${i+1}`}
            key={`slice${i}`}
            division={division}
            slice={i + 1}
            orientation={s.orientation}
            focal={s.focal}
            numSlices={numSlices}
            handleRotate={handleRotate}
          />
        )
      })}
    </div>
  )
}