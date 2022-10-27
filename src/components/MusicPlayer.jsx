import React from "react";
import Controller from "./Controller";
import Header from "./Header";
import TrackList from "./TrackList";

function MusicPlayer() {
  return (
    <>
      <div id="musicPlayer">
        <Header />
        <TrackList />
        <Controller />
      </div>
    </>
  );
}

export default MusicPlayer;
