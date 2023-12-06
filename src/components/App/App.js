import "./App.css";
import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Playlist from "../Playlist/Playlist";
import SearchResults from "../SearchResults/SearchResults";

const results = [
  {
    id: 1,
    key: 1,
    name: "Smoothies in 1991",
    artist: "Larry June",
    album: "Out The Trunk",
    URL: "https://open.spotify.com/track/5hmv0zcBcIX8OIVG98imHa?si=6bf485f5a10d4185",
  },
  {
    id: 2,
    key: 2,
    name: "Rich Spirit",
    artist: "Kendrick Lamar",
    album: "Mr. Morale & the Big Steppers",
    URL: "https://open.spotify.com/track/1QPreu0BNOrUfEb8HTd2qG?si=7ed6d3fa068f4824",
  },
  {
    id: 3,
    key: 3,
    name: "Dog Food (Feat. Denzel Curry)",
    artist: "IDK, Denzel Curry",
    album: "Simple.",
    URL: "https://open.spotify.com/track/2WTbnYggqMxe2SIixTrooY?si=2e013b8b24e84d64",
  },
  {
    id: 4,
    key: 4,
    name: "Free Lunch",
    artist: "Isaiah Rashad",
    album: "The Sun's Tirade",
    URL: "https://open.spotify.com/track/5FX89IUKm9QJT9ymrmyK4k?si=d65e98ac56934a36",
  },
  {
    id: 5,
    key: 5,
    name: "Massacre",
    artist: "J Hus",
    album: "Beautiful And Brutal Yard",
    URL: "https://open.spotify.com/track/2eNYRh1TuRum5vAMk9VLc3?si=767422e57d584799",
  },
];

function App() {
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistTrackURLS, setPlaylistTrackURLS] = useState([]);

  const handleAddOrRemove = (track) => {
    const existingTrack = playlistTracks.find((t) => t.id === track.id);

    if (existingTrack) {
      // Track is in the playlist, so remove it
      const updatedPlaylist = playlistTracks.filter((t) => t.id !== track.id);
      setPlaylistTracks(updatedPlaylist);

      const updatedPlaylistURLS = playlistTrackURLS.filter(
        (t) => t !== track.URL
      );
      setPlaylistTrackURLS(updatedPlaylistURLS);
      console.log("Playlist Tracks:", playlistTracks);
      console.log("Playlist Track URLs:", playlistTrackURLS);
    } else {
      // Track is not in the playlist, so add it
      setPlaylistTracks([...playlistTracks, track]);
      setPlaylistTrackURLS([...playlistTrackURLS, track.URL]);
      console.log("Playlist Tracks:", playlistTracks);
      console.log("Playlist Track URLs:", playlistTrackURLS);
    }



  };

  const handleSave = () => {
    console.log("Saving playlist...");
    console.log("Playlist Name:", playlistName);
    console.log("Playlist Tracks:", playlistTracks);
    console.log("Playlist Track URLs:", playlistTrackURLS);

  }

  return (
    <div>
      <h1 className="Title">Jammming</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults results={results} onAddOrRemove={handleAddOrRemove} />
          <Playlist
            playlistName={playlistName}
            setPlaylistName={setPlaylistName}
            playlistTracks={playlistTracks}
            setPlaylistTracks={setPlaylistTracks}
            onAddOrRemove={handleAddOrRemove}
            onSave={handleSave}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
