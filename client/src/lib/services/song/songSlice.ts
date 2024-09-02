import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song,SongState } from "../../../types";

const initialState: SongState = {
  songs: [],
  song: null,
  loading: false,
  error: null,
  songId: null,
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    fetchSongsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSongsSuccess(state, action: PayloadAction<Song[]>) {
      state.songs = action.payload;
      state.loading = false;
    },
    fetchSongsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    fetchSongByIdStart(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
      state.songId = action.payload;
    },
    fetchSongByIdSuccess(state, action: PayloadAction<Song>) {
      state.song = action.payload;
      state.loading = false;
    },
    fetchSongByIdFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    createSongStart(state, action: PayloadAction<Song>) {
      state.loading = true;
      state.error = null;
      state.song = action.payload;
    },
    createSongSuccess(state, action: PayloadAction<Song>) {
      state.songs.push(action.payload);
      state.loading = false;
    },
    createSongFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    editSongStart(state, action: PayloadAction<Song>) {
      state.loading = true;
      state.error = null;
      state.song = action.payload;
    },
    editSongSuccess(state, action: PayloadAction<Song>) {
      const index = state.songs.findIndex(
        (song) => song._id === action.payload._id
      );
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
      state.loading = false;
    },
    editSongFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },

    deleteSongStart(state, action: PayloadAction<string>) {
      state.loading = true;
      state.error = null;
      state.songId = action.payload;
    },
    deleteSongSuccess(state, action: PayloadAction<string>) {
      state.songs = state.songs.filter((song) => song._id !== action.payload);
      console.log(state.songs)
      state.loading = false;
    },
    deleteSongFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,

  fetchSongByIdStart,
  fetchSongByIdSuccess,
  fetchSongByIdFailure,

  createSongStart,
  createSongSuccess,
  createSongFailure,

  editSongStart,
  editSongSuccess,
  editSongFailure,

  deleteSongFailure,
  deleteSongStart,
  deleteSongSuccess,
} = songSlice.actions;

export default songSlice.reducer;
