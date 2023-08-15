import React from "react";
import { useDispatch } from "react-redux";
import { filterReducer } from "../reducers/filterReducer";

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const value = e.target.value;

    const action = filterReducer(value.toLowerCase());
    dispatch(action);
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div>
      {" "}
      <div style={style}>
        filter <input onChange={handleChange} />
      </div>
    </div>
  );
};
