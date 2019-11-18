import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <button onClick={this.incrementCount}>Click Here</button>
        {this.state.count}
      </div>
    );
  }
}

export default Counter;
