// src/LifecycleDemo.js
import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log('Component mounted!');
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    console.log('Component will unmount!');
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h2>Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default LifecycleDemo;
