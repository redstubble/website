import React, { Component } from 'react';
import WeatherGraph from 'react-d3-weather-graph'
const graphDiv = '.graph-canvas';

class App extends Component {
  render() {
    return (
    <WeatherGraph/>
    );
  }
}

export default App;
