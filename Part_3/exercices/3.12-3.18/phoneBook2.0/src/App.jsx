import { useState } from "react";

import "./App.css";
import Person from "./components/Person";
import { useEffect } from "react";
import axios from "axios";
const phoneBook = [
  {
    id: 1,
    name: "Ininital Persones",
    number: "666",
  },
];

function App() {
  const [persons, setPersons] = useState(phoneBook);

  // const baseUrl = "https://phonebook-backend-4b60.onrender.com";
  useEffect(() => {
    axios
      .get("api/persons")
      .then((response) => {
        setPersons(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // You can handle the error state here, e.g., set an error state variable
      });
  }, []);
  return (
    <>
      <h2>Persons:</h2>
      <Person persons={persons} />
    </>
  );
}

export default App;
