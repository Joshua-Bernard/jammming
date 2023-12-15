import React, { useCallback } from "react";

import "./Track.css";

const Track = (props) => {
  const addTrack = useCallback(
    (event) => {
      props.onAdd(props.track);
    },
    [props.onAdd, props.track]
  );

  const removeTrack = useCallback(
    (event) => {
      props.onRemove(props.track);
    },
    [props.onRemove, props.track]
  );

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button className="Track-action removeTrack" onClick={removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className="Track-action addTrack" onClick={addTrack}>
        +
      </button>
    );
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3 className="TrackName">{props.track.name}</h3>
        <p className="TrackArtistAlbum">
          {props.track.artist} <span>|</span> {props.track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;
