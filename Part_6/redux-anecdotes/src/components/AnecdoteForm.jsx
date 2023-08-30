import React from "react";
// import { createAnecdote } from "../reducers/anecdoteReducer";
import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import {
  clearNotification,
  setNotification,
} from "../reducers/notificationReducer";
import { newAnecdote } from "../services/anecdotes";

export const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const add = (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    newAnecdote(content).then(dispatch(createAnecdote(content)));

    dispatch(setNotification("New Note: " + content));
    setTimeout(() => dispatch(clearNotification()), 5000);
  };
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={add}>
        <div>
          <input name="note" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};
