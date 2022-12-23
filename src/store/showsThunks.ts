import {createAsyncThunk} from "@reduxjs/toolkit";
import {Show, ShowApi, ShowSearchApi} from "../types";
import axiosApi from "../axiosApi";

export const fetchShows = createAsyncThunk<Show[], string>(
  'shows/fetchAll',
  async (name) => {
    const showsResponse = await axiosApi.get<ShowSearchApi[] | []>('search/shows?q=' + name);
    const shows = showsResponse.data;
    console.log(shows)
    const allShows: Show[] = shows.map((show) => (
        {
          id: show.show.id,
          name: show.show.name,
          image: show.show.image.medium,
          description: show.show.summary,
      }
      )
    )
      return allShows;
  },
)

export const fetchOneShow = createAsyncThunk<Show, number>(
  'shows/fetchOne',
  async (id) => {
    const showResponse = await axiosApi.get<ShowApi>('shows/' + id);
    const show = showResponse.data;
    console.log(show)
    return (
        {
          id: show.id,
          name: show.name,
          image: show.image.medium,
          description: show.summary,
        }
      )
  },
)