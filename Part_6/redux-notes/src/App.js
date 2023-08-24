import { useEffect } from "react";
import NewNote from "./components/NewNote";
import Notes from "./components/Notes";
import { Vizibility } from "./components/vizibility";
import noteService from "./services/notes";
import { initializeNotes } from "./reducers/noteReducer";
import { useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeNotes());
  }, [dispatch]);
  return (
    <div>
      <NewNote />
      <Vizibility />
      <Notes />
    </div>
  );
};

export default App;
