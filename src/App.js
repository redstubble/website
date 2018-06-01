import React, { Component } from 'react';
import { FaGithub, FaMedium, FaBeer, FaFileTextO } from 'react-icons/lib/fa';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="clouds">
          <div class="cloud-1" data-speed="35000" />
          <div class="cloud-2" data-speed="45000" data-delay="15000" />{' '}
          <h1 class="container logo">
            <a class="link link--redstubble" href="#animation">
              RE<span>D</span>STUBBLE
            </a>
          </h1>
          <div class="cloud-3" data-speed="40000" />
          <div class="cloud-4" data-speed="38000" data-delay="20000" />
        </div>

        <p className="App-intro">
          Sorry busy doing things, I will make this pretty soon I promise.<FaBeer />
        </p>
        <p>
          <a
            href="https://github.com/redstubble"
            target="_blank"
            class="link-no-decoration"
          >
            <FaGithub size={50} style={{ margin: 30 }} />
          </a>
          <a
            href="https://medium.com/@redstubble"
            target="_blank"
            rel="noopener noreferrer"
            class="link-no-decoration"
          >
            <FaMedium size={50} style={{ margin: 30 }} />
          </a>
          <a
            href="https://github.com/redstubble/website/raw/gh-pages/resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
            class="link-no-decoration"
          >
            <FaFileTextO size={50} style={{ margin: 30 }} />
          </a>
        </p>
        <p>john [at] redstubble [dot] com</p>
      </div>
    );
  }
}

export default App;
