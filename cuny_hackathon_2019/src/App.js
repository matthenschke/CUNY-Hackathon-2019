import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";


// react components
import AudioForm from './Components/AudioForm';
import AudioList from './Components/AudioList';

import {storage} from './firebase';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      audioURLS: [],
    };
  }

  componentDidMount() {
    storage.ref().listAll().then(res => {
      let audioURLS = []
      console.log(res);
      res.items.forEach(folderRef => {
        console.log(folderRef);
        folderRef.getDownloadURL().then(url =>{
          console.log(url);
          audioURLS.push(url);
          console.log(audioURLS);
        }).catch(function(error) {
          console.log(error);
        });
      });
      this.setState({ audioURLS : audioURLS}, () => {
        console.log('done');
      });
      
      console.log(this.state.audioURLS)
      
    });
    
    
  }

  addVideoURL = url => {
    console.log(url.name);
    const storageRef = storage.ref();
    const mainAudio = storageRef.child(url.name);
    this.setState({mainAudio});
    console.log('ref: ', this.state.mainAudio);
    mainAudio.put(url).then(snapshot => {
      mainAudio.getDownloadURL().then(url => {
        this.setState({audioURLS : [...this.state.audioURLS, url]});
      })
      .catch(e => console.log(e))
    })
    .catch(e => console.log(e))
    

     
    
  }

  render() {
    let {audioURLS} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <span>Welcome To <img src={logo} className="App-logo" alt="logo" /></span>        
        </header>
        <AudioForm addVideoURL = {this.addVideoURL}/>
        <div id = "audio-clips">
        <audio controls>
        <source src= "https://firebasestorage.googleapis.com/v0/b/cuny-hackathon-2019-a415f.appspot.com/o/laugh.wav?alt=media&token=f97feb9a-0bc6-45e4-9d2a-f70043c254a4" type = "audio/wav" />
        </audio>
        <audio controls>
        <source src= "https://firebasestorage.googleapis.com/v0/b/cuny-hackathon-2019-a415f.appspot.com/o/laugh.wav?alt=media&token=f97feb9a-0bc6-45e4-9d2a-f70043c254a4" type = "audio/wav" />
        </audio>
        <audio controls>
        <source src= "https://firebasestorage.googleapis.com/v0/b/cuny-hackathon-2019-a415f.appspot.com/o/laugh.wav?alt=media&token=f97feb9a-0bc6-45e4-9d2a-f70043c254a4" type = "audio/wav" />
        </audio>
        <audio controls>
        <source src= "https://firebasestorage.googleapis.com/v0/b/cuny-hackathon-2019-a415f.appspot.com/o/laugh.wav?alt=media&token=f97feb9a-0bc6-45e4-9d2a-f70043c254a4" type = "audio/wav" />
        </audio>
        <audio controls>
        <source src= "https://firebasestorage.googleapis.com/v0/b/cuny-hackathon-2019-a415f.appspot.com/o/laugh.wav?alt=media&token=f97feb9a-0bc6-45e4-9d2a-f70043c254a4" type = "audio/wav" />
        </audio>
        </div>
        {/* <AudioList audioList = {this.state.audioURLS} /> */}
      </div>
    );
  }
}

export default App;
