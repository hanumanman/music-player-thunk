import React, { useState } from "react";
import { selectMusicPlayer, playTrack, trackList } from "../slices/playerSlice";
import { useSelector, useDispatch } from "react-redux";

function TrackList() {
  const musicPlayer = useSelector(selectMusicPlayer);
  const dispatch = useDispatch();

  const [isPlaying, setIsPlaying] = useState(musicPlayer.isPlaying);
  console.log(`isPlaying`, isPlaying);
  return (
    <div id="trackList">
      {trackList.map((track, index) => (
        <button
          onClick={() => {
            setIsPlaying(!isPlaying);
            console.log(`is playin`, musicPlayer.isPlaying);
            dispatch(playTrack({ index, isPlaying }));
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
