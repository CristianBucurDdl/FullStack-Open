import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const filterValue = useSelector((state) => state.filter);

  const dispatch = useDispatch();
  const vote = (id) => {
    dispatch(addVote(id));
  };
  const filteredAnecdotes =
    filterValue === ""
      ? anecdotes
      : anecdotes.filter((n) => n.content.toLowerCase().includes(filterValue));

  console.log(filteredAnecdotes);
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return (
    <>
      {filteredAnecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div style={style} key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
    </>
  );
};

export default AnecdoteList;
