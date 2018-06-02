import React, { Component } from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react';
import { FaGithub, FaMedium, FaFileTextO } from 'react-icons/lib/fa';
import './App.css';
import 'semantic-ui-css/semantic.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="clouds">
          <div className="cloud-1" data-speed="35000" />
          <div className="cloud-2" data-speed="45000" data-delay="15000" />{' '}
          <h1 className="container logo">
            <a className="link link--redstubble" href="#animation">
              RE<span>D</span>STUBBLE
            </a>
          </h1>
          <div className="cloud-3" data-speed="40000" />
          <div className="cloud-4" data-speed="38000" data-delay="20000" />
        </div>
        <p className="icons">
          <a
            href="https://github.com/redstubble"
            target="_blank"
            rel="noopener noreferrer"
            className="link-no-decoration"
          >
            <FaGithub size={50} style={{ margin: 30 }} />
          </a>
          <a
            href="https://medium.com/@redstubble"
            target="_blank"
            rel="noopener noreferrer"
            className="link-no-decoration"
          >
            <FaMedium size={50} style={{ margin: 30 }} />
          </a>
          <a
            href="https://github.com/redstubble/website/raw/gh-pages/resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="link-no-decoration"
          >
            <FaFileTextO size={50} style={{ margin: 30 }} />
          </a>
        </p>
        <p>john [at] redstubble [dot] com</p>
        <Container>
          <Segment.Group>
            <Segment color="orange" raised={true} compact={true}>
              <Grid centered={true}>
                <Grid.Column width={6} textAlign="right">
                  Lingua Franca:
                </Grid.Column>
                <Grid.Column width={6} textAlign="left">
                  JS, C#, PHP, SQL
                </Grid.Column>
              </Grid>
              <Grid centered={true}>
                <Grid.Column width={6} textAlign="right">
                  Pidgin:
                </Grid.Column>
                <Grid.Column width={6} textAlign="left">
                  React, React Native, Silverstripe, ASP.NET
                </Grid.Column>
              </Grid>
            </Segment>
          </Segment.Group>
        </Container>
      </div>
    );
  }
}

export default App;
