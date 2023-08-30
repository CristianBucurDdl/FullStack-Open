import Notification from "./components/Notification";
import { AnecdoteForm } from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import { Filter } from "./components/Filter";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  appendAnecdote,
  initialiseAnecdotes,
} from "./reducers/anecdoteReducer";
import { getAll } from "./services/anecdotes";
const App = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   getAll().then((anecdotes) => dispatch(appendAnecdote(anecdotes)));
  // }, [dispatch]);
  useEffect(() => {
    dispatch(initialiseAnecdotes());
  }, [dispatch]);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
