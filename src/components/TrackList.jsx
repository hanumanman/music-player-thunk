import React from "react";
import { selectMusicPlayer, playTrack, trackList } from "../slices/playerSlice";
import { useSelector, useDispatch } from "react-redux";

function TrackList() {
  const musicPlayer = useSelector(selectMusicPlayer);
  const dispatch = useDispatch();
  console.log(musicPlayer.isPlaying);
  return (
    <div id="trackList">
      {trackList.map((track, index) => (
        <button
          onClick={() => {
            console.log(musicPlayer.isPlaying);
            dispatch(playTrack(index, musicPlayer.isPlaying));
          }}
          key={index}
        >
          {track.name}
        </button>
      ))}
    </div>
  );
}

export default TrackList;
