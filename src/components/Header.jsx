import React from "react";
import { useSelector } from "react-redux";
import { selectMusicPlayer } from "../slices/playerSlice";

function Header() {
  const musicPlayer = useSelector(selectMusicPlayer);

  return (
    <div id="header">
      {musicPlayer.tracks[musicPlayer.currentTrackIndex].name}
    </div>
  );
}

export default Header;
