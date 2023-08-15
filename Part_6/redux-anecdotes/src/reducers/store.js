import { configureStore, createSlice } from "@reduxjs/toolkit";

import initialReducer from "./anecdoteReducer";
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
  reducer: { filter: filterSlice.reducer, anecdotes: initialReducer },
});
export const { setFilter } = filterSlice.actions;
export default filterSlice;
