import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    isOn: false,
    x: null,
    y: null
  };

  componentDidMount() {
    document.title = this.state.count;
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  componentDidUpdate() {
    document.title = this.state.count;
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = event => {
    this.setState(() => ({
      x: event.pageX,
      y: event.pageY
    }));
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
    const { count, isOn, x, y } = this.state;
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

        <h1>Mouse Position</h1>
        <p>X position : {x}</p>
        <p>Y position : {y}</p>
      </div>
    );
  }
}

export default Counter;
