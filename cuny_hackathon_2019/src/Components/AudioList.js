import React from "react";

const AudioList = props => {
  let { audioList } = props;
//   audioList.array.forEach(element => {
//       console.log(element);
//   });
  audioList = audioList.map((url, index) => {
    console.log(url);
    return (
      <li key={index}>
        <audio controls>
        <source src= "https://firebasestorage.googleapis.com/v0/b/cuny-hackathon-2019-a415f.appspot.com/o/laugh.wav?alt=media&token=f97feb9a-0bc6-45e4-9d2a-f70043c254a4" type = "audio/wav" />
        </audio>
      </li>
    );
  });
  return (
       <div>
           <ul>{audioList && audioList}</ul>
       </div> 
    );
};

export default AudioList;
