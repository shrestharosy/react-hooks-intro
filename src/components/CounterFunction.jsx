import React, { useState, useEffect } from 'react';

const CounterFunction = () => {
  const [count, setCount] = useState(0);

  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    document.title = count;
  });

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
        window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [count]);

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    });
  };

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Counter Function</h1>
      {count}
      <br />
      <br />
      <button onClick={incrementCount}>Increment</button>

      <h1>Mouse Position</h1>
      <p>X position : {mousePosition.x}</p>
      <p>Y position : {mousePosition.y}</p>
    </div>
  );
};

export default CounterFunction;
