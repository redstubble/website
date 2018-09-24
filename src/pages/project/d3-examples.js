import React, { Component } from 'react';
import WeatherGraph from 'react-d3-weather-graph';
import { Segment, Divider } from 'semantic-ui-react'
import SandboxTemplate from '../../templates/sandbox';

class App extends Component {
  render() {
    return (
      <SandboxTemplate 
      title={'d3 Example'}
      description={'Weather Graph Using D3'}
      type={'project'}
      >
      <Segment>
    Using D3 line, area and voronio modules. Displays the 5 day weather forecast. Locations can be shown/hidden using the legend below
    <Divider fitted />
    State managed by react. Module is available as a package <a href="https://github.com/redstubble/reactjs-d3-weather" target="_blank"  >here</a>
  </Segment>
    <WeatherGraph/>
      </SandboxTemplate>
    );
  }
}

export default App;
