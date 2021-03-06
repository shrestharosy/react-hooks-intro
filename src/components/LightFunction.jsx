import React, { useState, useContext } from 'react';
import { UserContext } from './CounterFunction';

const LightFunction = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn);
  };

  const value = useContext(UserContext)

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

      {/* <UserContext.Consumer>
        {value => <div>This is {value}</div>}
      </UserContext.Consumer> */}

      This is {value}

    </div>
  );
};

export default LightFunction;
