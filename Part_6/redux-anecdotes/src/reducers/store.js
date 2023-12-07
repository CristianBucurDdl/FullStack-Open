import { configureStore, createSlice } from "@reduxjs/toolkit";

import { anecdotesSlice } from "./anecdoteReducer";
import notificationSlice from "./notificationReducer";
// import initialReducer, { anecdotesSlice } from "./anecdoteReducer";
// import { filterReducer } from "./filterReducer";

export const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterReducer(state = "", action) {
      return action.payload;
    },
  },
});
export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,

    anecdotes: anecdotesSlice.reducer,
    notification: notificationSlice.reducer,
  },
});
export const { setFilter } = filterSlice.actions;
export default filterSlice;
