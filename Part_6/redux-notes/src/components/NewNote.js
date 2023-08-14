import { useDispatch } from "react-redux";
import { createNote } from "../reducers/noteReducer";

const NewNote = (props) => {
  const dispatch = useDispatch();
  // dispatch(createNoteSl("here"));
  const addNote = (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";
    dispatch(createNote(content));
  };
  dispatch(createNote("Redux Toolkit is awesome!"));
  return (
    <form onSubmit={addNote}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  );
};

export default NewNote;
