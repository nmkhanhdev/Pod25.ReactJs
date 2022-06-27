import React, { Component } from 'react';
import ClassCounter from './Counter'

class Lifecycle extends Component {

  constructor(props) {
    super(props);
    this.state = { isRunning: true };
    console.log('I am in the CONSTRUCTOR of the Lifecycle.js.');
  }

  stopCounter = () => {
      this.setState({ isRunning: false })
  }

  render() {
    console.log('I am in RENDER of the Lifecycle.js.');
    return this.state.isRunning ? (
      <div className="Lifecycle">
        <h2>Clicking this button will destroy the Counter component and clear the state.</h2>
        <button onClick={this.stopCounter}>Stop the counter</button>
        <ClassCounter /> 
      </div>
    ) : null
  }
}

export default Lifecycle;