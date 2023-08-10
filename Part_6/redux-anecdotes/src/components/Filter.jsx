import React from "react";
import { useDispatch } from "react-redux";
import { theFilterValue } from "../reducers/filterReducer";
import { addVote } from "../reducers/anecdoteReducer";

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    const action = theFilterValue(value);
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
