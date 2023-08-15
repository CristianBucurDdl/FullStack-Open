import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import {
  clearNotification,
  setNotification,
} from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filterValue = useSelector((state) => state.filter);

  const dispatch = useDispatch();
  const vote = (anecdote) => {
    dispatch(addVote(anecdote.id));
    dispatch(setNotification(anecdote.content));
    setTimeout(() => dispatch(clearNotification()), 5000);
  };
  const filteredAnecdotes =
    filterValue === ""
      ? anecdotes
      : anecdotes.filter((n) => n.content.toLowerCase().includes(filterValue));

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return (
    <>
      {filteredAnecdotes
        .slice()
        .sort((a, b) => b.votes - a.votes)
        //
        .map((anecdote) => (
          <div style={style} key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
        ))}
    </>
  );
};

export default AnecdoteList;
