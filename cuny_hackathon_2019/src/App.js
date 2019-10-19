import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";


// react components
import VideoForm from './Components/VideoForm';
import VideoList from './Components/VideoList';

import {storage} from './firebase';

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
    console.log(url.name);
    const uploadAudio = storage.ref(`audio/${url.name}`).put(url);
        uploadAudio.on('state_changed',
            snapshot => {
                console.log(snapshot);
            }, error => {
                console.log(error);
            }, () => {
                storage.ref(url).child(url.name).getDownloadURL().then(url => {
                  this.setState({videoURLS : [...this.state.videoURLS, url]});
                  localStorage.set('audio_files', this.state.videoURLS);
                  console.log(localStorage.getItem('audio_files'));
                })

              });

     
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>Welcome To <img src={logo} className="App-logo" alt="logo" /></span>        
        </header>
        <VideoForm addVideoURL = {this.addVideoURL}/>
        <VideoList />
      </div>
    );
  }
}

export default App;
