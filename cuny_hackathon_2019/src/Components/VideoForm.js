import React, { Component } from "react";

class VideoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAudio: null
    };
  }

  handleImage = e => {
    this.setState({ currentAudio: e.target.files[0],
    currentAudioPath : e.target.value });
  };
  render() {
    const { currentAudio, currentAudioPath } = this.state;
    console.log(currentAudio, currentAudioPath);
    return (
      <div>
        <input
          type="file"
          name="currentAudio"
          required
          accept=".wav"
          onChange={this.handleImage}
        ></input>
        {/* {currentAudio && (
          <div>
            <audio controls src={currentAudioPath}></audio>
          </div>
        )} */}
      </div>
    );
  }
}

export default VideoForm;
