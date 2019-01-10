import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoStream from './VideoStream';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <VideoStream url="http://localhost:3001/public/video-300x200-64br.m3u8" />
      </div>
    );
  }
}

// http://localhost:3001/public/video-300x200-64br.m3u8

export default App;
