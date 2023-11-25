import React from "react";
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

function SearchResults(props) {
  console.log("Current Results:", props.results);
  
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList
        tracks={props.results}
        onAddOrRemove={props.onAddOrRemove}
        isRemoval={false}
      />
    </div>
  );
}

export default SearchResults;
