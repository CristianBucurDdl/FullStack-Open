/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import axios from "axios";
import Person from "./components/Person";
const phoneBook = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];
const App = () => {
  const [persons, setPersons] = useState(phoneBook);
  const [newPerson, setNewPerson] = useState([]);
  const [newPersonApi, setNewPersonApi] = useState([]);
  const [showAll, setShowAll] = useState(false);
  // console.log(persons);
  // const baseUrl = "/api/notes";
  const baseUrl = "https:/localhost:3001";
  useEffect(() => {
    axios.get(baseUrl + "/api/persons").then((response) => {
      setNewPersonApi(response.data);
      console.log(response.data);
    });
  }, []);

  const addPerson = (event) => {
    console.log();
    // event.preventDefault();
    // const noteObject = {
    //   content: newNote,
    //   important: Math.random() > 0.5,
    // };

    // axios.post(baseUrl, noteObject).then((response) => {
    //   setNotes(notes.concat(response.data));
    //   setNewNote("");
    // });
  };

  // const handlePersonChange = (event) => {
  //   setNewNote(event.target.value);
  // };
  // const changeImportant = (id) => {
  //   axios.post(baseUrl + `/${id}`).then(
  //     axios.get(baseUrl).then((response) => {
  //       setNotes(response.data);
  //     })
  //   );
  // };
  // const notesToShow = showAll ? notes : notes.filter((note) => note.important);
  // console.log(notes);
  return (
    <div>
      <h1>Persons</h1>
      <div>
        {/* <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button> */}
      </div>
      <ul>
        {newPersonApi.map((person) => (
          <div>
            <Person key={person.id} person={person} />
          </div>
        ))}
      </ul>
      <form onSubmit={addPerson}>
        <input value={newPerson} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
