import { createSlice } from "@reduxjs/toolkit";

export const theFilterValue = (value) => {
  console.log(value);
  return {
    type: "SET_FILTER",
    payload: { value },
  };
};
// const filterReducer = (state = " ", action) => {
//   console.log(action.payload);
//   switch (action.type) {
//     case "SET_FILTER":
//       return action.payload;

//     default:
//       return state;
//   }
// };
// export default filterReducer;

export const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterReducer: (state = "", action) => {
      return action.payload;
    },
  },
});

export const { filterReducer } = filterSlice.actions;
export default filterSlice.reducer;
