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
  },
  {
    id: 2,
    key: 2,
    name: "Rich Spirit",
    artist: "Kendrick Lamar",
    album: "Mr. Morale & the Big Steppers",
  },
  {
    id: 3,
    key: 3,
    name: "Dog Food (Feat. Denzel Curry)",
    artist: "IDK, Denzel Curry",
    album: "Simple.",
  },
  {
    id: 4,
    key: 4,
    name: "Free Lunch",
    artist: "Isaiah Rashad",
    album: "The Sun's Tirade",
  },
  {
    id: 5,
    key: 5,
    name: "Massacre",
    artist: "J Hus",
    album: "Beautiful And Brutal Yard",
  },
];

function App() {
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  return (
    <div>
      <h1 className="Title">Jammming</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults results={results} />
          <Playlist
            playlistName={playlistName}
            setPlaylistName={setPlaylistName}
            playlistTracks={playlistTracks}
            setPlaylistTracks={setPlaylistTracks}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
