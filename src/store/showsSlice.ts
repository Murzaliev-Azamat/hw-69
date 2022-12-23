import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import {Show} from "../types";
import {fetchOneShow, fetchShows} from "./showsThunks";


interface ShowsState {
  shows: Show[] | [];
  fetchLoading: boolean;
  selectedShow: Show | null;
}

const initialState: ShowsState = {
  shows: [],
  fetchLoading: false,
  selectedShow: null,
}

export const ShowsSlice = createSlice({
  name: 'shows',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShows.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchShows.fulfilled, (state, action) => {
      state.fetchLoading = false;
      state.shows = action.payload;
    });
    builder.addCase(fetchShows.rejected, (state) => {
      state.fetchLoading = false;
    });
    builder.addCase(fetchOneShow.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchOneShow.fulfilled, (state, action) => {
      state.fetchLoading = false;
      state.selectedShow = action.payload;
    });
    builder.addCase(fetchOneShow.rejected, (state) => {
      state.fetchLoading = false;
    });
  }
});

export const showsReducer = ShowsSlice.reducer;

export const selectShows = (state: RootState) => state.shows.shows;
export const selectSelectedShow = (state: RootState) => state.shows.selectedShow;
export const selectShowsFetchLoading = (state: RootState) => state.shows.fetchLoading;
