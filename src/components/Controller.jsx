import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  togglePlay,
  playNextTrack,
  playPrevTrack,
  selectMusicPlayer,
} from "../slices/playerSlice";

function Controller() {
  const dispatch = useDispatch();
  const musicPlayer = useSelector(selectMusicPlayer);
  return (
    <div id="controller">
      <button onClick={() => dispatch(playPrevTrack())}>Prev</button>

      {musicPlayer.isPlaying ? (
        <button onClick={() => dispatch(togglePlay())}>Pause</button>
      ) : (
        <button onClick={() => dispatch(togglePlay())}>Play</button>
      )}

      <button onClick={() => dispatch(playNextTrack())}>Next</button>
    </div>
  );
}

export default Controller;
