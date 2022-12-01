import Slice from './Slice';

export default ({ gen }) => {
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
  const division = 360 / numSlices; // division for all slices: 8 slices = 45deg ea.
  let slices = [...Array(numSlices).keys()];
  let tries = 1;
  slices = slices.map((s, i) => {
    // orientation is the rotation in deg of each individual slice
    const orientation = i * division;
    let slice = i + 1;
    if (slice > slices.length / 2) {
      slice = slice - tries;
      tries += 2;
    }
    // focal represents the center point of each slice: used to rotate pizza box
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
            key={`slice${i+1}`}
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