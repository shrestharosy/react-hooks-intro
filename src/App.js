import React from 'react';

import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
import LightFunction from './components/LightFunction';

function App() {
  return (
    <>
      <CounterClass />
      <hr />
      <CounterFunction />
      <LightFunction />
    </>
  );
}

export default App;
