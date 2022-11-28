import { useState, useEffect } from 'react';

export default ({ division, slice, orientation, focal, handleRotate }) => {
  const [rotation, setRotation] = useState(0);

  const style = { transform: `rotate(${orientation}deg) skewY(-${90 - division}deg)`};
  useEffect(() => {
    console.log(slice, focal);
    setRotation(focal);
  }, [])

  return (
    <div className={`slice s${slice}`} style={style} onClick={(e) => { handleRotate(e, rotation) }}></div>
  )
};