import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  togglePlay,
  playNextTrack,
  playPrevTrack,
  selectMusicPlayer,
  playPrev,
} from "../slices/playerSlice";

function Controller() {
  const dispatch = useDispatch();
  const musicPlayer = useSelector(selectMusicPlayer);
  const trackIndex = musicPlayer.currentTrackIndex;

  return (
    <div id="controller">
      <button onClick={() => dispatch(playPrev(dispatch, trackIndex, 3))}>
        Prev
      </button>

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
