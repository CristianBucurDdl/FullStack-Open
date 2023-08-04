import React from "react";
import { useDispatch } from "react-redux";
import { filterChange } from "../reducers/filterReducer";

export const Vizibility = () => {
  const dispatch = useDispatch();
  const filterSelected = (value) => {
    dispatch(filterChange(value));
  };
  return (
    <div>
      {" "}
      all{" "}
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected("ALL")}
      />{" "}
      important{" "}
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected("IMPORTANT")}
      />{" "}
      nonImportant{" "}
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected("NONIMPORTANT")}
      />{" "}
    </div>
  );
};
export default Vizibility;
