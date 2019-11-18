import React, { useState } from 'react';

const CounterFunction = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount+1)
  }

  return (
    <div>
      <h1>Counter Function</h1>
      {count}
      <br/>
      <br/>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default CounterFunction;
