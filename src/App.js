import React, { Component } from 'react';
import './App.css';
import ElevationBorder from './elevation-border';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() }
  }
  componentDidMount() {
    setInterval(
      () => this.tick(),
      1000
    );
  }
  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    var date = this.state.date;
    if (date.getMonth() >= 0 && date.getFullYear() === 2018) {
      return (
        <div>
          <h1>Hello, Cohort 7!</h1>
          <ElevationBorder>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </ElevationBorder>
        </div>
      );
    } else {
      return null;
    }
  }
}

class App extends Component {
  render() {
    return (
      <Clock />
    );
  }
}

export default App;
