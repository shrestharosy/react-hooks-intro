import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <h1>Counter Class</h1>
        {this.state.count}
        <br/>
        <br/>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Counter;
