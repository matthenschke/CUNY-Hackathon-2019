import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import VideoRecorder from "react-video-recorder";

class App extends Component {

  componentWillMount(){
    const uploadedVideos = localStorage.getItem("uploadedVideos");
    
  }

  constructor(props) {
    super(props);
    this.state = {
      uploadedVideos: []
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>Welcome To <img src={logo} className="App-logo" alt="logo" /></span>        
        </header>
      </div>
    );
  }
}

export default App;
