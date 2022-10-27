import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import Track1 from "../assets/audio/1.mp3";
import Track2 from "../assets/audio/2.mp3";
import Track3 from "../assets/audio/3.mp3";

const audioPlaying = new Audio(Track1);

const initialState = {
  currentTrackIndex: 0,
  isPlaying: false,
};

export const playPrev = createAsyncThunk("playPrev", async (index, length) => {
  const newIndex = (((index + -1) % length) + length) % length;
  const audio = new Audio(trackList[newIndex].file);
  audio.play();
  return {
    currentTrackIndex: newIndex,
    isPlaying: true,
  };
});

export const trackList = [{ name: "Drop It", file: Track1 }];

export const playTrack = createAsyncThunk(
  "playTrack",
  async (index, isTrackPlaying) => {
    console.log(trackList[index].file);
    console.log(`is playing`, isTrackPlaying);
    const audio = new Audio(trackList[index].file);
    if (isTrackPlaying) {
      audio.pause();
      return {
        currentTrackIndex: index,
        isTrackPlaying: false,
      };
    } else {
      audio.play();
      return {
        currentTrackIndex: index,
        isTrackPlaying: true,
      };
    }
  }
);

export const playerSlice = createSlice({
  name: "abdasd",
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
    UpdateStore: (state, action) => {
      if (action.payload === state.currentTrackIndex) {
        state.isPlaying = !state.isPlaying;
        playerSlice.caseReducers.togglePlay(state);
      } else {
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
  extraReducers: (builder) => {
    builder.addCase(playPrev.fulfilled, (state, action) => {
      console.log(action);
    });
    builder.addCase(playTrack.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isPlaying = action.payload.isTrackPlaying;
      state.currentTrackIndex = action.payload.currentTrackIndex;
    });
    builder.addCase(playTrack.rejected, (state, action) => {
      console.log(action);
    });
  },
});

export const selectMusicPlayer = (state) => state.musicPlayer;

export const { playNextTrack, playPrevTrack, togglePlay } = playerSlice.actions;
export default playerSlice.reducer;
