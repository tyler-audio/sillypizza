import { useState, useEffect } from 'react';

export default ({ division, slice, orientation, focal, handleRotate }) => {
  const [rotation, setRotation] = useState(0);

  const skew = -(90 - division);
  const style = { transform: `rotate(${orientation}deg) skewY(${skew}deg)`};

  useEffect(() => {
    console.log(slice, focal);
    setRotation(focal);
  }, [])

  return (
    <>
      <div className={`slice s${slice}`} style={style} onClick={(e) => { handleRotate(e, rotation) }}>
        <div className="inner-slice" style={{ transform: `skewY(-${skew}deg)` }}>
          <p className="name" style={{ transform: `rotate(${division / 2}deg)` }}>Horse</p>
        </div>
      </div>
    </>
  )
};