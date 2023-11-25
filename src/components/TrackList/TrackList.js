import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

function TrackList(props) {
  return (
    <div className="TrackList">
      {props.tracks &&
        props.tracks.map((track) => {
          console.log("Current Track:", track);
          return (
            <Track
              key={track.id}
              track={track}
              onAddOrRemove={props.onAddOrRemove}
              isRemoval={props.isRemoval}
            />
          );
        })}
    </div>
  );
}

export default TrackList;
