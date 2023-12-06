import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

function Playlist(props) {
  return (
    <div className="Playlist">
      <input
        className="PlaylistTitle"
        type="text"
        value={props.playlistName}
        onChange={(e) => props.setPlaylistName(e.target.value)}
      />
      <TrackList
        tracks={props.playlistTracks}
        onAddOrRemove={props.onAddOrRemove}
        isRemoval={true}
      />
      <button className="Playlist-save" onClick={props.onSave} >SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
