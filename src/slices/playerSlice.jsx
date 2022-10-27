import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import Track1 from "../assets/audio/1.mp3";
import Track2 from "../assets/audio/2.mp3";
import Track3 from "../assets/audio/3.mp3";

const initialState = {
  audioPlayer: new Audio(Track1),
  tracks: [
    {
      name: "Drop It",
      file: Track1,
    },
    {
      name: "Password Infinity",
      file: Track2,
    },
    {
      name: "The Beat Of Nature",
      file: Track3,
    },
  ],
  currentTrackIndex: 0,
  isPlaying: false,
};

export const playerSlice = createSlice({
  name: "playerSlice",
  initialState,
  reducers: {
    togglePlay: (state) => {
      if (state.isPlaying) {
        state.audioPlayer.pause();
      } else {
        state.audioPlayer.play();
      }
      state.isPlaying = !state.isPlaying;
    },

    playTrack: (state, action) => {
      console.log(action.payload);
      if (action.payload === state.currentTrackIndex) {
        // if (state.isPlaying) {
        //   state.audioPlayer.pause();
        // } else {
        //   state.audioPlayer.play();
        // }
        // state.isPlaying = !state.isPlaying;
        playerSlice.caseReducers.togglePlay(state);
      } else {
        state.audioPlayer.pause();
        const audio = new Audio(state.tracks[action.payload].file);
        audio.loop = true;
        state.audioPlayer = audio;
        state.audioPlayer.play();

        state.currentTrackIndex = action.payload;
        state.isPlaying = true;
      }
    },
    playNextTrack: (state) => {
      const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
      playerSlice.caseReducers.playTrack(state, { payload: newIndex });
    },
    playPrevTrack: (state) => {
      const newIndex =
        (((state.currentTrackIndex + -1) % state.tracks.length) +
          state.tracks.length) %
        state.tracks.length;

      playerSlice.caseReducers.playTrack(state, { payload: newIndex });
    },
  },
});

export const selectMusicPlayer = (state) => state.musicPlayer;

export const { playTrack, playNextTrack, playPrevTrack, togglePlay } =
  playerSlice.actions;
export default playerSlice.reducer;
