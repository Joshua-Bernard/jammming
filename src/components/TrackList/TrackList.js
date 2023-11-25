import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

function TrackList(props) {
  return (
    <div className="TrackList">
      {props.tracks &&
        props.tracks.map((track) => {
          return (
            <Track
              key={track.id}
              trackName={track.name}
              artist={track.artist}
            />
          );
        })}
    </div>
  );
}

export default TrackList;
