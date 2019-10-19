import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";


// react components
import VideoForm from './Components/VideoForm';
import VideoList from './Components/VideoList';

import {storage} from 'firebase';

class App extends Component {

  componentWillMount(){
    /* TODO */
  }

  constructor(props) {
    super(props);
    this.state = {
      videoURLS: []
    };
  }

  addVideoURL(url){
    this.setState({videoURLS : [...this.state.videoURLS, url]});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>Welcome To <img src={logo} className="App-logo" alt="logo" /></span>        
        </header>
        <VideoForm/>
        <VideoList />
      </div>
    );
  }
}

export default App;
