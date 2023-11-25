import React from "react";
import "./Track.css";

function Track(props) {
  console.log("Current Track:", props.track);

  let action;

  const handleClick = () => {
    props.onAddOrRemove(props.track);
  };

  if (props.isRemoval) {
    action = (
      <span className="material-symbols-outlined">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M200-440v-80h560v80H200Z" />
        </svg>
      </span>
    );
  } else {
    action = (
      <span className="material-symbols-outlined">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
      </span>
    );
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <p className="TrackName">{props.track.name}</p>
        <p className="TrackArtist">{props.track.artist}</p>
      </div>
      <button className="Track-action" onClick={handleClick}>
        {action}
      </button>
    </div>
  );
}

export default Track;
