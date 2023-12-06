/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(false);
  const baseUrl = "https://test2-jkp7.onrender.com/api/notes";
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setNotes(response.data);
      console.log(response.data);
    });
  }, []);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    };

    axios.post(baseUrl, noteObject).then((response) => {
      setNotes(notes.concat(response.data));
      setNewNote("");
    });
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };
  const changeImportant = (id) => {
    console.log(id);
  };
  const notesToShow = showAll ? notes : notes.filter((note) => note.important);
  // console.log(notes);
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <div>
            <Note key={note.id} note={note} />
            <button onClick={() => changeImportant(note.id)}>
              {note.important ? "Make not important" : "Make Important"}
            </button>
          </div>
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
