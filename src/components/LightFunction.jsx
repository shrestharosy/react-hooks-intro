import React, { useState } from 'react';

const LightFunction = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn);
  };

  return (
    <div>
      <h1>Torch Light Function</h1>
      <div
        style={{
          height: '50px',
          width: '50px',
          background: isOn ? 'yellow' : 'grey'
        }}
        onClick={toggleLight}
      ></div>
      {/* <img
        src={
          isOn
            ? 'https://icon.now.sh/higjlight/fd0'
            : 'https://icon.now.sh/higjlight/aaa'
        }
        style={{
          height: '50px',
          width: '50px'
        }}
        alt='Torch Light'
        onClick={toggleLight}
      ></img> */}
    </div>
  );
};

export default LightFunction;
