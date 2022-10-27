import React from "react";
import { playTrack, selectMusicPlayer } from "../slices/playerSlice";
import { useSelector, useDispatch } from "react-redux";

function TrackList() {
  const musicPlayer = useSelector(selectMusicPlayer);
  const dispatch = useDispatch();
  return (
    <div id="trackList">
      {musicPlayer.tracks.map((track, index) => (
        <button onClick={() => dispatch(playTrack(index))} key={index}>
          {track.name}
        </button>
      ))}
    </div>
  );
}

export default TrackList;
