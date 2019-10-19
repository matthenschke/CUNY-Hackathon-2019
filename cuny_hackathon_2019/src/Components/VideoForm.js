import React, { Component } from "react";

class VideoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAudio: null
    };
  }

  handleImage = e => {
    console.log(e.target.files[0])
    this.setState({currentAudio: e.target.files[0]});
    console.log(this.state.currentAudio)
    this.props.addVideoURL(e.target.files[0]);
  };
  render() {
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
