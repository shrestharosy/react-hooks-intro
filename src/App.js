import React from 'react';

import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';

function App() {
  return (
    <React.Fragment>
      <CounterClass />
      <hr />
      <CounterFunction />
    </React.Fragment>
  );
}

export default App;
