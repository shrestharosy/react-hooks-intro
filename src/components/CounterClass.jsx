import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    isOn: false
  };

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  toggleLight = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }));
  };

  render() {
    const {count, isOn} = this.state
    return (
      <div>
        <h1>Counter Class</h1>
        {count}
        <br />
        <br />
        <button onClick={this.incrementCount}>Increment</button>

        <h1>Torch Light Class</h1>
        <div
          style={{
            height: '50px',
            width: '50px',
            background: isOn ? 'yellow' : 'grey'
          }}
          onClick={this.toggleLight}
        ></div>


      </div>
    );
  }
}

export default Counter;
